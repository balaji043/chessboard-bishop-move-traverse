import { traverseBishopMoveMain } from '../../utility/bishopTraversable';
import {
	IPoint,
	getChessGrid,
	isSame,
	CellColors,
	IsTraversable,
	isSamePoint,
} from '../../utility/utils';

export interface AppState {
	startPoint: IPoint;
	endPoint: IPoint;
	grid: string[][];
	canTraverse: string;
}

export type AppAction =
	| { type: 'input'; p: IPoint; isStart: boolean }
	| { type: 'end-i'; p: IPoint }
	| { type: 'clear-selection' }
	| { type: 'traverse' }
	| { type: 'cell-click'; point: IPoint };
const updatePoint = (
	currentState: AppState,
	point: IPoint,
	a: IPoint,
	b: IPoint,
	aColor: string,
	bColor: string
) => {
	const { grid } = currentState;
	if (isSamePoint(point, a)) {
		grid[point.x][point.y] = CellColors.same;
	} else {
		grid[point.x][point.y] = aColor;
	}
	if (isSamePoint(a, b)) {
		grid[a.x][a.y] = bColor;
	} else {
		grid[b.x][b.y] = CellColors.default;
	}
	return { ...currentState, grid: [...grid] };
};
export const appReducer = (
	currentState: AppState,
	action: AppAction
): AppState => {
	switch (action.type) {
		case 'input': {
			const point = action.p;
			const { startPoint, endPoint } = currentState;
			if (action.isStart) {
				const newState = updatePoint(
					currentState,
					point,
					endPoint,
					startPoint,
					CellColors.start,
					CellColors.end
				);
				return { ...newState, startPoint: point };
			} else {
				const newState = updatePoint(
					currentState,
					point,
					startPoint,
					endPoint,
					CellColors.end,
					CellColors.start
				);
				return { ...newState, endPoint: point };
			}
		}

		case 'clear-selection': {
			const { grid } = currentState;
			grid.map((row, i) => {
				row.map((_, j) => {
					if (grid[i][j] === CellColors.selected) {
						grid[i][j] = CellColors.default;
					}
				});
			});
			return { ...currentState, grid, canTraverse: IsTraversable.default };
		}
		case 'traverse': {
			const { grid, startPoint, endPoint } = currentState;
			const result = traverseBishopMoveMain(startPoint, endPoint);
			if (result === null) {
				return { ...currentState, canTraverse: IsTraversable.no, grid };
			} else {
				console.log(result);
				for (let i = 1; i < result.length - 1; i++)
					grid[result[i].x][result[i].y] = CellColors.selected;
				return { ...currentState, canTraverse: IsTraversable.yes, grid };
			}
		}
		case 'cell-click': {
			const { startPoint, endPoint } = currentState;
			const point = action.point;
			const { x, y } = point;
			const isStart = isSamePoint(point, startPoint);
			const isEnd = isSamePoint(point, endPoint);
			if (!isStart && !isEnd) {
				const { grid } = currentState;
				const newArray = JSON.parse(JSON.stringify(grid));
				if (grid[x][y] === CellColors.selected)
					newArray[x][y] = CellColors.default;
				else newArray[x][y] = CellColors.selected;
				return { ...currentState, grid: newArray };
			}
			return currentState;
		}
		default:
			throw new Error();
	}
};
const getGrid = () => {
	const grid = getChessGrid();
	grid[0][0] = CellColors.same;
	return grid;
};
export const appDefaultState = (): AppState => {
	return {
		startPoint: { x: 0, y: 0 },
		endPoint: { x: 0, y: 0 },
		grid: getGrid(),
		canTraverse: IsTraversable.default,
	};
};
