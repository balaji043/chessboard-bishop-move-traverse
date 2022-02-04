import { FC } from 'react';
import { CellColors } from '../../../utility/utils';

export const ColorCoders: FC = () => {
	return (
		<div className='grid grid-cols-2'>
			<ColorCoder backgroundColor={CellColors.default} label='Default' />
			<ColorCoder backgroundColor={CellColors.selected} label='Selected' />
			<ColorCoder backgroundColor={CellColors.start} label='Start' />
			<ColorCoder backgroundColor={CellColors.end} label='End' />
		</div>
	);
};

interface IColorCoderProps {
	backgroundColor: string;
	label: string;
}

const ColorCoder: FC<IColorCoderProps> = ({ backgroundColor, label }) => {
	return (
		<div className='flex gap-3 items-center'>
			<div
				className={`m-1 w-6 h-6 border-2 rounded-md ${backgroundColor}`}
			></div>
			<label> {label}</label>
		</div>
	);
};
