import { IPoint } from './utils';
const moveTopLeft = (start: IPoint, end: IPoint) => {
	console.log('top left');
	// top left
	return traverseBishopMove({ x: start.x - 1, y: start.y - 1 }, end);
};
const moveTopRight = (start: IPoint, end: IPoint) => {
	console.log('top right');
	return traverseBishopMove({ x: start.x - 1, y: start.y + 1 }, end);
};
const moveBottomRight = (start: IPoint, end: IPoint) => {
	console.log('bottom right');
	return traverseBishopMove({ x: start.x + 1, y: start.y + 1 }, end);
};
const moveBottomLeft = (start: IPoint, end: IPoint) => {
	console.log('bottom left');
	return traverseBishopMove({ x: start.x + 1, y: start.y - 1 }, end);
};
const traverseBishopMove = (
	start: IPoint,
	end: IPoint,
	n: number = 8
): IPoint[] | null => {
	if (start.x < 0 || start.y < 0 || start.x >= n || start.y >= n) {
		return null;
	}
	if (start.x == end.x && start.y == end.y) {
		return [start];
	}
	let result = null;

	if (start.x == end.x) {
		console.log('same row');
		if (end.y > start.y) {
			console.log('right');
			if (end.y - start.y === 0 || (end.y - start.y - 1) % 2 === 0) {
				return null;
			}
			result = moveTopRight(start, end);
			if (result == null) {
				result = moveBottomRight(start, end);
			}
		} else {
			console.log('left');
			if (start.y - end.y === 0 || (start.y - end.y + 1) % 2 === 0) {
				return null;
			}
			result = moveTopLeft(start, end);
			if (result == null) {
				result = moveBottomLeft(start, end);
			}
		}
	} else if (start.y == end.y) {
		console.log('same column');
		if (end.x > start.x) {
			console.log('bottom');
			if (end.x - start.x === 0 || (end.x - start.x - 1) % 2 == 0) {
				return null;
			}
			result = moveBottomRight(start, end);
			if (result == null) result = moveBottomLeft(start, end);
		} else {
			console.log('top');
			if ((start.x - end.x === 0 || (start.x - end.x + 1) % 2) == 0) {
				return null;
			}
			result = moveTopLeft(start, end);
			if (result == null) result = moveTopRight(start, end);
		}
	} else if (end.x > start.x && end.y > start.y) {
		result = moveBottomRight(start, end);
	} else if (end.x < start.x && end.y < start.y) {
		result = moveTopLeft(start, end);
	} else if (end.x > start.x && start.y > end.y) {
		result = moveBottomLeft(start, end);
	} else if (start.x > end.x && end.y > start.y) {
		result = moveTopRight(start, end);
	}
	if (result != null) {
		return [start, ...result];
	}
	return null;
};
export const traverseBishopMoveMain = (
	start: IPoint,
	end: IPoint,
	n: number = 8
): IPoint[] | null => {
	if (end.x < 0 || end.y < 0 || end.x >= n || end.y >= n) {
		return null;
	}
	return traverseBishopMove(start, end);
};
