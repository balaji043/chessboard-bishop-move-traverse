import { getChessGrid } from '../../utility/utils';

interface IHomeState {
	gridRowLength: number;
	gridColumnLength: number;
	grid: string[][];
}

type IHomeAction = {};

export const homeDefaultState = (): IHomeState => {
	return { grid: getChessGrid(), gridRowLength: 8, gridColumnLength: 8 };
};

export const homeReducer = (
	currentState: IHomeState,
	action: IHomeAction
): IHomeState => {
	return currentState;
};
