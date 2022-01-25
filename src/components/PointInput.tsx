import { FC } from 'react';
import { IPoint, isValidCoordinate } from '../utility/utils';
import { NumInput } from './NumInput';
export interface IPointInputProps {
	point: IPoint;
	setPoint: (ipoint: IPoint) => void;
	type: 'Start' | 'End';
}

export const PointInput: FC<IPointInputProps> = ({ point, setPoint, type }) => {
	return (
		<div className='InputGroup'>
			<NumInput
				defaultValue={point.x}
				onChange={(e) => {
					const n = parseInt(e.target.value);
					if (isValidCoordinate(n)) setPoint({ x: n, y: point.y });
				}}
				label={`${type} Point Row`}
			/>
			<NumInput
				defaultValue={point.y}
				onChange={(e) => {
					const n = parseInt(e.target.value);
					if (isValidCoordinate(n)) setPoint({ x: point.x, y: n });
				}}
				label={`${type} Point Col`}
			/>
		</div>
	);
};
