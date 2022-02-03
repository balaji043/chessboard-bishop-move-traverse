import { useReducer } from 'react';
import { FC } from 'react';
import { BoardRow } from '../../components/BoardRow';
import { LeftSection } from './components/LeftSection';
import { appReducer, appDefaultState } from './bishopMoveTraverseReducer';

export const BishopMoveTraverse: FC = () => {
	const [{ startPoint, endPoint, grid, canTraverse }, dispatch] = useReducer(
		appReducer,
		appDefaultState()
	);

	return (
		<div className='max-w-screen-2xl'>
			<div className='h-full grid grid-cols-12 max-w-6xl mx-auto'>
				<LeftSection
					startPoint={startPoint}
					endPoint={endPoint}
					canTraverse={canTraverse}
					dispatch={dispatch}
				/>
				<div className='col-span-8 grid justify-center'>
					<div>
						{grid.map((row, i) => (
							<BoardRow
								onClick={(point) => dispatch({ type: 'cell-click', point })}
								key={'row' + i}
								i={i}
								row={row}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
