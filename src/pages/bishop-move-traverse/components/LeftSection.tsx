import { Dispatch } from 'react';
import { FC } from 'react';
import { Button } from 'src/components/Button';
import { CanTraverse } from 'src/pages/bishop-move-traverse/components//CanTraverse';
import { ColorCoders } from 'src/pages/bishop-move-traverse/components/ColorCoder';
import { PointInput } from 'src/pages/bishop-move-traverse/components/PointInput';
import { CHESS_BOARD_SIZE, IPoint } from 'src/utility/utils';
import { AppAction } from 'src/pages/bishop-move-traverse/bishopMoveTraverseReducer';

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
