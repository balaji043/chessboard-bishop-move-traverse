import { useReducer } from 'react';
import { FC } from 'react';
import { BoardCell } from '../../components/BoardCell';
import { sudokuDefaultState, sudokuReducer } from './SudokuReducer';

export const Sudoku: FC = () => {
	const [{ grid }, dispatch] = useReducer(sudokuReducer, sudokuDefaultState());

	return (
		<div className='max-w-screen-2xl'>
			<div className='h-full grid grid-cols-12 max-w-6xl mx-auto'>
				<div className='col-span-8 grid justify-center'>
					<div>
						{grid.map((row, x) => (
							<div className='flex'>
								{row.map((cell, y) => {
									return (
										<BoardCell
											color={''}
											onClick={() => {}}
											key={`Cells[${x},${y}]`}
										>
											{cell}
										</BoardCell>
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
