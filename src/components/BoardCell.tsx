import { FC } from "react";
import { COLORS } from "../utility/utils";

export interface IBoardCell {
	isStart: boolean;
	isEnd: boolean;
	i: number;
	j: number;
	grid: string[][];
	setGrid: (grid: string[][]) => void;
}
export const BoardCell: FC<IBoardCell> = ({
	isStart,
	isEnd,
	grid,
	i,
	j,
	setGrid,
}) => {
	const backgroundColor = (): any => {
		if (isStart && isEnd) {
			return {
				backgroundColor: '#038285',
				color: 'white',
			};
		}
		return {
			backgroundColor: isStart ? COLORS.start : isEnd ? COLORS.end : grid[i][j],
		};
	};
	return (
		<button
			onClick={() => {
				if (!isStart && !isEnd) {
					if (grid[i][j] === COLORS.selected) grid[i][j] = COLORS.default;
					else grid[i][j] = COLORS.selected;
					setGrid([...grid]);
				}
			}}
			className='Box'
			style={backgroundColor()}
		>
			[{`${i},${j}`}]
		</button>
	);
};
