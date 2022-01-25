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
	if (a == x) {
		console.log('same row');
		if (y > b) {
			console.log('right');
			if (y - b === 0 || (y - b - 1) % 2 === 0) {
				return null;
			}
			console.log('tr');
			// top right
			result = traverseBishopMove(a - 1, b + 1, x, y);
			if (result == null) {
				console.log('br');
				// bottom right
				result = traverseBishopMove(a + 1, b + 1, x, y);
			}
		} else {
			console.log('left');
			if (b - y === 0 || (b - y + 1) % 2 === 0) {
				return null;
			}
			console.log('tl');
			// top left
			result = traverseBishopMove(a - 1, b - 1, x, y);
			if (result == null) {
				console.log('bl');
				// bottom right
				result = traverseBishopMove(a + 1, b - 1, x, y);
			}
		}
	} else if (b == y) {
		console.log('same column');
		if (x > a) {
			console.log('bottom');
			if (x - a === 0 || (x - a - 1) % 2 == 0) {
				return null;
			}
			console.log('br');
			// bottom right
			result = traverseBishopMove(a + 1, b + 1, x, y);
			if (result == null) {
				console.log('bl');
				// bottom left
				result = traverseBishopMove(a + 1, b - 1, x, y);
			}
		} else {
			console.log('top');
			if ((a - x === 0 || (a - x + 1) % 2) == 0) {
				return null;
			}
			console.log('tl');
			// top left
			result = traverseBishopMove(a - 1, b - 1, x, y);
			if (result == null) {
				console.log('tr');
				// top right
				result = traverseBishopMove(a - 1, b + 1, x, y);
			}
		}
	} else if (x > a && y > b) {
		console.log('br');
		// bottom right
		result = traverseBishopMove(a + 1, b + 1, x, y);
	} else if (x < a && y < b) {
		console.log('tl');
		// top left
		result = traverseBishopMove(a - 1, b - 1, x, y);
	} else if (x > a && b > y) {
		console.log('bl');
		// bottom left
		result = traverseBishopMove(a + 1, b - 1, x, y);
	} else if (a > x && y > b) {
		console.log('tr');
		// top right
		result = traverseBishopMove(a - 1, b + 1, x, y);
	}
	if (result != null) {
		return [[a, b], ...result];
	}
	return null;
};
