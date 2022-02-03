export enum CellColors {
	default = 'bg-white',
	start = 'bg-red-400',
	end = 'bg-green-400',
	selected = 'bg-yellow-300',
	same = ' bg-blue-600',
}
export const CHESS_BOARD_SIZE = 8;
export const getChessGrid = (): string[][] =>
	Array.from({ length: CHESS_BOARD_SIZE }, () =>
		Array.from({ length: CHESS_BOARD_SIZE }, () => CellColors.default)
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
export const isSamePoint = (p1: IPoint, p2: IPoint): boolean =>
	p1.x === p2.x && p1.y == p2.y;
export const isValidCoordinate = (n: number): boolean => {
	if (typeof n !== 'undefined' && n >= 0 && n < CHESS_BOARD_SIZE) return true;
	return false;
};

export enum IsTraversable {
	yes = 'Traversable 😁!!!',
	no = 'Not Traversable 😅!!!',
	default = '',
}

export enum NavLinks {
	HOME = '/',
	BISHOP_MOVE_TRAVERSE = '/bishop-move-traverse',
}
