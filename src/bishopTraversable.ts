export const traverseBishopMove = (
	a: number,
	b: number,
	x: number,
	y: number,
	n: number = 8
): number[][] | null => {
	const currentPoint = { a, b, x, y };
	console.log(currentPoint);
	if (a < 0 || b < 0 || a >= n || b >= n) {
		return null;
	}
	if (a == x && b == y) {
		return [[a, b]];
	}
	let result = null;
	const moveTopLeft = () => {
		console.log('tl');
		// top left
		return traverseBishopMove(a - 1, b - 1, x, y);
	};
	const moveTopRight = () => {
		console.log('tr');
		// top right
		return traverseBishopMove(a - 1, b + 1, x, y);
	};
	const moveBottomRight = () => {
		console.log('bl');
		// bottom right
		return traverseBishopMove(a + 1, b + 1, x, y);
	};

	const moveBottomLeft = () => {
		console.log('bl');
		// bottom left
		return traverseBishopMove(a + 1, b - 1, x, y);
	};
	if (a == x) {
		console.log('same row');
		if (y > b) {
			console.log('right');
			if (y - b === 0 || (y - b - 1) % 2 === 0) {
				return null;
			}
			result = moveTopRight();
			if (result == null) {
				result = moveBottomRight();
			}
		} else {
			console.log('left');
			if (b - y === 0 || (b - y + 1) % 2 === 0) {
				return null;
			}
			result = moveTopLeft();
			if (result == null) {
				result = moveBottomLeft();
			}
		}
	} else if (b == y) {
		console.log('same column');
		if (x > a) {
			console.log('bottom');
			if (x - a === 0 || (x - a - 1) % 2 == 0) return null;
			result = moveBottomRight();
			if (result == null) result = moveBottomLeft();
		} else {
			console.log('top');
			if ((a - x === 0 || (a - x + 1) % 2) == 0) return null;
			result = moveTopLeft();
			if (result == null) result = moveTopRight();
			}
	} else if (x > a && y > b) {
		result = moveBottomRight();
	} else if (x < a && y < b) {
		result = moveTopLeft();
	} else if (x > a && b > y) {
		result = moveBottomLeft();
	} else if (a > x && y > b) {
		result = moveTopRight();
	}
	if (result != null) {
		return [[a, b], ...result];
	}
	return null;
};
