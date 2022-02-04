import { FC, ChangeEvent } from 'react';
export interface INumInputProps {
	defaultValue: number;
	label: string;
	max: number;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const NumInput: FC<INumInputProps> = ({
	defaultValue,
	onChange,
	label,
	max,
}) => {
	return (
		<div>
			<label className='block'>{label}</label>
			<input
				min={0}
				max={max - 1}
				type='number'
				defaultValue={defaultValue}
				onChange={(e) => onChange(e)}
				className='w-full px-5 py-3 inline-block border-2 box-border rounded-xl'
			/>
		</div>
	);
};
