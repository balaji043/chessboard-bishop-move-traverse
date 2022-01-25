import { FC } from 'react';

export interface IColorCoderProps {
	backgroundColor: string;
	label: string;
}

export const ColorCoder: FC<IColorCoderProps> = ({
	backgroundColor,
	label,
}) => {
	return (
		<div className='ColorCoder'>
			<div className='ColorCoderBox' style={{ backgroundColor }}></div>
			<label className='ColorCoderLabel'> {label}</label>
		</div>
	);
};
