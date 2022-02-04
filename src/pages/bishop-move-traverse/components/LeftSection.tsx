import { Dispatch } from 'react';
import { FC } from 'react';
import { Button } from '../../../components/Button';
import { CanTraverse } from './CanTraverse';
import { ColorCoders } from './ColorCoder';
import { PointInput } from './PointInput';
import { CHESS_BOARD_SIZE, IPoint } from '../../../utility/utils';
import { AppAction } from '../bishopMoveTraverseReducer';

interface IProps {
	startPoint: IPoint;
	endPoint: IPoint;
	canTraverse: string;
	dispatch: Dispatch<AppAction>;
}
export const LeftSection: FC<IProps> = ({
	startPoint,
	endPoint,
	dispatch,
	canTraverse,
}) => {
	return (
		<div className='col-span-4 w-full'>
			<div className='flex flex-col gap-5 p-6'>
				<PointInput
					point={startPoint}
					setPoint={(p) => dispatch({ type: 'input', isStart: true, p })}
					type='Start'
					max={CHESS_BOARD_SIZE}
				/>
				<PointInput
					point={endPoint}
					setPoint={(p) => dispatch({ type: 'input', isStart: false, p })}
					type='End'
					max={CHESS_BOARD_SIZE}
				/>
				<ColorCoders />
				<Button onClick={() => dispatch({ type: 'clear-selection' })}>
					clear selections
				</Button>
				<Button
					onClick={() => {
						dispatch({ type: 'clear-selection' });
						dispatch({ type: 'traverse' });
					}}
				>
					Traverse
				</Button>
				<CanTraverse canTraverse={canTraverse} />
			</div>
		</div>
	);
};
