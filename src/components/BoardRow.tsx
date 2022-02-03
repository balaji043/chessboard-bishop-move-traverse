import { FC } from 'react';
import { IPoint, isSame } from '../utility/utils';
import { BoardCell } from './BoardCell';

export interface IBoardRowProps {
	i: number;
	startPoint: IPoint;
	endPoint: IPoint;
	row: string[];
	grid: string[][];
	setGrid: (grid: string[][]) => void;
}
export const BoardRow: FC<IBoardRowProps> = ({
	i,
	startPoint,
	endPoint,
	row,
	grid,
	setGrid,
}) => {
	console.log(`Board Row ${i} Rendered`);

	return (
		<div style={{ display: 'flex' }}>
			{row.map((_, j) => {
				const isStart = isSame(i, j, startPoint);
				const isEnd = isSame(i, j, endPoint);
				return (
					<BoardCell
						key={`cell${i}${j}`}
						isStart={isStart}
						isEnd={isEnd}
						i={i}
						j={j}
						setGrid={setGrid}
						grid={grid}
					/>
				);
			})}
		</div>
	);
};
