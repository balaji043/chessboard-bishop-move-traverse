export const COLORS = {
	default: 'white',
	start: '#e76969ab',
	end: '#42b842a8',
	selected: '#ebeb43',
};
export const CHESS_BOARD_SIZE = 8;
export const getChessGrid = (): string[][] =>
	Array.from({ length: CHESS_BOARD_SIZE }, () =>
		Array.from({ length: CHESS_BOARD_SIZE }, () => COLORS.default)
	);
export interface IPoint {
	x: number;
	y: number;
}
export interface ISample {
	start: IPoint;
	end: IPoint;
}
export const isSame = (i: number, j: number, point: IPoint): boolean =>
	i == point.x && j == point.y;
export const isValidCoordinate = (n: number): boolean => {
	if (typeof n !== 'undefined' && n >= 0 && n < CHESS_BOARD_SIZE) return true;
	return false;
};

export const IS_TRAVERSABLE = {
	yes: 'Traversable 😁!!!',
	no: 'Not Traversable 😅!!!',
	default: '',
};
