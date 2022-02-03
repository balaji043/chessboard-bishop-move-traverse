import { FC, ChangeEvent } from 'react';
import { CHESS_BOARD_SIZE } from '../utility/utils';
export interface INumInputProps {
	defaultValue: number;
	label: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const NumInput: FC<INumInputProps> = ({
	defaultValue,
	onChange,
	label,
}) => {
	return (
		<div>
			<label className='block'>{label}</label>
			<input
				min={0}
				max={CHESS_BOARD_SIZE - 1}
				type='number'
				defaultValue={defaultValue}
				onChange={(e) => onChange(e)}
				className='w-full px-5 py-3 inline-block border-2 box-border rounded-xl'
			/>
		</div>
	);
};
