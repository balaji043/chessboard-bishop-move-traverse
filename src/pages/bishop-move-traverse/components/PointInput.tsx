import { FC } from 'react';
import { IPoint, isValidCoordinate } from 'src/utility/utils';
import { NumInput } from 'src/pages/bishop-move-traverse/components/NumInput';
export interface IPointInputProps {
	point: IPoint;
	setPoint: (ipoint: IPoint) => void;
	type: 'Start' | 'End';
	max: number;
}

export const PointInput: FC<IPointInputProps> = ({
	point,
	setPoint,
	type,
	max,
}) => {
	return (
		<div className='grid grid-cols-2 gap-2 w-full'>
			<NumInput
				defaultValue={point.x}
				onChange={(e) => {
					const n = parseInt(e.target.value);
					if (isValidCoordinate(n)) setPoint({ x: n, y: point.y });
				}}
				max={max}
				label={`${type} Point Row`}
			/>
			<NumInput
				defaultValue={point.y}
				onChange={(e) => {
					const n = parseInt(e.target.value);
					if (isValidCoordinate(n)) setPoint({ x: point.x, y: n });
				}}
				max={max}
				label={`${type} Point Col`}
			/>
		</div>
	);
};
