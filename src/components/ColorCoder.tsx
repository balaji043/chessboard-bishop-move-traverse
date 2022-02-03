import { FC } from 'react';
import { COLORS } from '../utility/utils';

export const ColorCoders = () => {
	console.log("ColorCoders Rendered")
	return (
		<div className='ColorCoderContainer'>
			<ColorCoder backgroundColor={COLORS.default} label='Default' />
			<ColorCoder backgroundColor={COLORS.selected} label='Selected' />
			<ColorCoder backgroundColor={COLORS.start} label='Start' />
			<ColorCoder backgroundColor={COLORS.end} label='End' />
		</div>
	);
};

interface IColorCoderProps {
	backgroundColor: string;
	label: string;
}

const ColorCoder: FC<IColorCoderProps> = ({ backgroundColor, label }) => {
	return (
		<div className='ColorCoder'>
			<div className='ColorCoderBox' style={{ backgroundColor }}></div>
			<label className='ColorCoderLabel'> {label}</label>
		</div>
	);
};
