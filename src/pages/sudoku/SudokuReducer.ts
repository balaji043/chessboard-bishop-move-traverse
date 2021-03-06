import { CellColors, getChessGrid, IPoint } from '../../utility/utils';

interface ISudokuState {
	grid: any[][];
}

type ISudokuAction = {};

export const sudokuDefaultState = (): ISudokuState => {
	return {
		grid: [
			[3, 0, 6, 5, 0, 8, 4, 0, 0],
			[5, 2, 0, 0, 0, 0, 0, 0, 0],
			[0, 8, 7, 0, 0, 0, 0, 3, 1],
			[0, 0, 3, 0, 1, 0, 0, 8, 0],
			[9, 0, 0, 8, 6, 3, 0, 0, 5],
			[0, 5, 0, 0, 9, 0, 6, 0, 0],
			[1, 3, 0, 0, 0, 0, 2, 5, 0],
			[0, 0, 0, 0, 0, 0, 0, 7, 4],
			[0, 0, 5, 2, 0, 6, 3, 0, 0],
		],
	};
};

export const sudokuReducer = (
	currentState: ISudokuState,
	action: ISudokuAction
): ISudokuState => {
	throw new Error('Unkown Type');
};
