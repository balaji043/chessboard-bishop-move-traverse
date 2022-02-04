import { CellColors, getChessGrid, IPoint } from '../../utility/utils';

interface IHomeState {
	gridRowLength: number;
	gridColumnLength: number;
	grid: string[][];
}

type IHomeAction =
	| {
			type: 'cell-click';
			point: IPoint;
	  }
	| { type: 'clear-selection' };

export const homeDefaultState = (): IHomeState => {
	return { grid: getChessGrid(), gridRowLength: 8, gridColumnLength: 8 };
};

export const homeReducer = (
	currentState: IHomeState,
	action: IHomeAction
): IHomeState => {
	switch (action.type) {
		case 'cell-click': {
			const point = action.point;
			const { x, y } = point;
			const { grid } = currentState;
			const newArray = JSON.parse(JSON.stringify(grid));
			if (grid[x][y] === CellColors.selected)
				newArray[x][y] = CellColors.default;
			else newArray[x][y] = CellColors.selected;
			return { ...currentState, grid: newArray };
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
			return { ...currentState, grid };
		}
	}
	throw new Error("Unkown Type");
};
