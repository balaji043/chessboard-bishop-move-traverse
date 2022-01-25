import { IPoint, ISample } from './utils';

const sameRowLeftError: ISample = {
	start: {
		x: 2,
		y: 2,
	},
	end: {
		x: 2,
		y: 5,
	},
};

const sameRowLeftSucces: ISample = {
	start: {
		x: 2,
		y: 2,
	},
	end: {
		x: 2,
		y: 6,
	},
};

const sameRowRightError: ISample = {
	start: {
		x: 2,
		y: 5,
	},
	end: {
		x: 2,
		y: 2,
	},
};

const sameRowRightSucces: ISample = {
	start: {
		x: 2,
		y: 2,
	},
	end: {
		x: 2,
		y: 4,
	},
};
// start pos: [2,2]
// end pos: [6,6]
// path: [2,2], [3,3], [4,4], [5,5], [6,6]
// start pos: [3,1]
// end pos: [3,3]
// path: [3,1], [2,2], [3,3]   or
// path: [3,1], [4,2], [3,3]
// start pos: [2,1]
// end pos: [2,2]
const tc1: ISample = {
	start: {
		x: 2,
		y: 2,
	},
	end: {
		x: 6,
		y: 6,
	},
};
const tc2: ISample = {
	start: {
		x: 3,
		y: 1,
	},
	end: {
		x: 3,
		y: 3,
	},
};
const tc3: ISample = {
	start: {
		x: 2,
		y: 1,
	},
	end: {
		x: 2,
		y: 2,
	},
};
export default tc3;

