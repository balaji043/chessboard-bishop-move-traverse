import { useReducer } from 'react';
import { FC } from 'react';
import { BoardCell } from '../../components/BoardCell';
import { homeDefaultState, homeReducer } from './reducer';

export const Home: FC = () => {
	const [{ grid }, dispatch] = useReducer(homeReducer, homeDefaultState());

	return (
		<div>
			<div className='col-span-8 grid justify-center'>
				<div>
					{grid.map((row, i) => (
						<div className='flex' key={`row${i}`}>
							{row.map((_, j) => {
								return (
									<BoardCell
										color={''}
										onClick={() => {}}
										key={`Cells[${i},${j}]`}
									>
										[{`${i},${j}`}]
									</BoardCell>
								);
							})}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
