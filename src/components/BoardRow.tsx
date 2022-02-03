import { FC } from 'react';
import { IPoint } from '../utility/utils';
import { BoardCell } from './BoardCell';

export interface IBoardRowProps {
	i: number;
	row: string[];
	onClick: (iPoint: IPoint) => void;
}
export const BoardRow: FC<IBoardRowProps> = ({
	i: x,
	row,
	onClick,
}) => {
	return (
		<div className='flex'>
			{row.map((color, y) => {
				return (
					<BoardCell
						color={color}
						onClick={() => onClick({ x, y })}
						key={`Cells[${x},${y}]`}
					>
						[{`${x},${y}`}]
					</BoardCell>
				);
			})}
		</div>
	);
};
