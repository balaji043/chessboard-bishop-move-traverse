import { useReducer } from 'react';
import { FC } from 'react';
import { BoardRow } from 'src/components/BoardRow';
import { gridDefaultState, gridReducer } from 'src/pages/grid/GridReducer';

export const Grid: FC = () => {
	const [{ grid, }, dispatch] = useReducer(
		gridReducer,
		gridDefaultState()
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
