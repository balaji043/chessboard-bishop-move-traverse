import { useReducer } from 'react';
import { BoardRow } from '../../components/BoardRow';
import { CanTraverse } from '../../components/CanTraverse';
import { ColorCoders } from '../../components/ColorCoder';
import { PointInput } from '../../components/PointInput';
import { appReducer, defaultState } from './reducer';


export const BishopMoveTraverse = () => {
	const [{ startPoint, endPoint, grid, canTraverse }, dispatch] = useReducer(
		appReducer,
		defaultState()
	);

	return (
		<div className='Container'>
			<div className='InputContainer'>
				<PointInput
					point={startPoint}
					setPoint={(p) => dispatch({ type: 'start-i', p })}
					type='Start'
				/>
				<PointInput
					point={endPoint}
					setPoint={(p) => dispatch({ type: 'end-i', p })}
					type='End'
				/>
				<ColorCoders />
				<div className='ActionButtons'>
					<button
						className='button'
						onClick={() => dispatch({ type: 'clear-selection' })}
					>
						clear selections
					</button>
					<button
						className='button'
						onClick={() => {
							dispatch({ type: 'clear-selection' });
							dispatch({ type: 'traverse' });
						}}
					>
						Traverse
					</button>
				</div>
				<CanTraverse canTraverse={canTraverse} />
			</div>
			<div>
				<div>
					{grid.map((row, i) => (
						<BoardRow
							startPoint={startPoint}
							endPoint={endPoint}
							grid={grid}
							setGrid={(grid: string[][]) => {
								dispatch({ type: 'update-grid', grid });
							}}
							key={'row' + i}
							i={i}
							row={row}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
