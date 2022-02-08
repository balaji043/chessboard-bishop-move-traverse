import { useReducer } from 'react';
import { FC } from 'react';
import { CellColors } from '../../utility/utils';
import { sudokuDefaultState, sudokuReducer } from './SudokuReducer';

export const Sudoku: FC = () => {
	const [{ grid }, dispatch] = useReducer(sudokuReducer, sudokuDefaultState());

	return (
		<div className=''>
			<p>Work in progress</p>
			<div className='h-full max-w-6xl mx-auto'>
				<div className=''>
					<div className='grid gap-4 m-10'>
						{grid.map((row, x) => (
							<div className='grid grid-cols-9 gap-4' key={`row+${x}`}>
								{row.map((cell, y) => {
									const bg = cell !== 0 ? CellColors.end : CellColors.default;
									return (
										<input
											key={`Cells[${x},${y}]`}
											type='number'
											min={1}
											max={9}
											defaultValue={cell}
											disabled={cell !== 0}
											className={`hide-num-input-spin-buttons h-14 w-14 border-2 rounded-md text-center ${bg}`}
											maxLength={1}
										/>
									);
								})}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
