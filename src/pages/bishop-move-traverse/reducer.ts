import { traverseBishopMoveMain } from '../../utility/bishopTraversable';
import {
	IPoint,
	getChessGrid,
	isSame,
	COLORS,
	IS_TRAVERSABLE,
} from '../../utility/utils';
import defaultData from '../../utility/data';

export interface AppState {
	startPoint: IPoint;
	endPoint: IPoint;
	grid: string[][];
	canTraverse: string;
}

export type AppAction =
	| { type: 'start-i'; p: IPoint }
	| { type: 'end-i'; p: IPoint }
	| { type: 'clear-selection' }
	| { type: 'traverse' }
	| { type: 'update-grid'; grid: string[][] };

export const appReducer = (
	currentState: AppState,
	action: AppAction
): AppState => {
	switch (action.type) {
		case 'start-i': {
			return { ...currentState, startPoint: action.p };
		}
		case 'end-i': {
			return { ...currentState, endPoint: action.p };
		}
		case 'clear-selection': {
			const { grid, startPoint, endPoint } = currentState;
			grid.map((row, i) => {
				row.map((_, j) => {
					if (!(isSame(i, j, startPoint) || isSame(i, j, endPoint))) {
						grid[i][j] = COLORS.default;
					}
				});
			});
			return { ...currentState, grid, canTraverse: IS_TRAVERSABLE.default };
		}
		case 'traverse': {
			const { grid, startPoint, endPoint } = currentState;
			const result = traverseBishopMoveMain(startPoint, endPoint);
			if (result === null) {
				return { ...currentState, canTraverse: IS_TRAVERSABLE.no, grid };
			} else {
				console.log(result);
				result.map((e) => (grid[e.x][e.y] = COLORS.selected));
				return { ...currentState, canTraverse: IS_TRAVERSABLE.yes, grid };
			}
		}
		case 'update-grid': {
			return { ...currentState, grid: action.grid };
		}
		default:
			throw new Error();
	}
};

export const defaultState = (): AppState => {
	return {
		startPoint: defaultData.start,
		endPoint: defaultData.end,
		grid: getChessGrid(),
		canTraverse: IS_TRAVERSABLE.default,
	};
};
