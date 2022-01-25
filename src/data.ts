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
export default sameRowRightError;
