import { useReducer } from 'react';
import { FC } from 'react';
import { BoardRow } from '../../components/BoardRow';
import { PointInput } from '../bishop-move-traverse/components/PointInput';
import { homeDefaultState, homeReducer } from './homeReducer';

export const Home: FC = () => {
	const [{ grid, }, dispatch] = useReducer(
		homeReducer,
		homeDefaultState()
	);

	return (
		<div className='max-w-screen-2xl'>
			<div className='h-full grid grid-cols-12 max-w-6xl mx-auto'>
				<div className='grid'>
					<div>
						{grid.map((row, i) => (
							<BoardRow
								i={i}
								row={row}
								onClick={(point) => dispatch({ type: 'cell-click', point })}
								key={`row${i}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
