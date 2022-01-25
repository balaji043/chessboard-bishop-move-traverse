import { FC } from 'react';
import { NumInput } from './NumInput';
import { IPoint, isValidCoordinate } from './utils';
export interface IPointInputProps {
	point: IPoint;
	setPoint: (ipoint: IPoint) => void;
}

export const PointInput: FC<IPointInputProps> = ({ point, setPoint }) => {
	return (
		<div className='InputGroup'>
			<NumInput
				defaultValue={point.x}
				onChange={(e) => {
					const n = parseInt(e.target.value);
					if (isValidCoordinate(n)) setPoint({ x: n, y: point.y });
				}}
				label='End row'
			/>
			<NumInput
				defaultValue={point.y}
				onChange={(e) => {
					const n = parseInt(e.target.value);
					if (isValidCoordinate(n)) setPoint({ x: point.x, y: n });
				}}
				label='End Col'
			/>
		</div>
	);
};
