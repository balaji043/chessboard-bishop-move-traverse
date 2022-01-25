import { FC } from 'react';
import { CHESS_BOARD_SIZE } from './utils';
export interface INumInputProps {
	defaultValue: number;
	label: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const NumInput: FC<INumInputProps> = ({
	defaultValue,
	onChange,
	label,
}) => {
	return (
		<div className='input-field'>
			<label>{label}</label>
			<input
				min={0}
				max={CHESS_BOARD_SIZE - 1}
				type='number'
				defaultValue={defaultValue}
				onChange={(e) => onChange(e)}
			/>
		</div>
	);
};
