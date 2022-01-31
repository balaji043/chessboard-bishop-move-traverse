import { useState } from 'react';
import { traverseBishopMoveMain } from './utility/bishopTraversable';
import {
	IPoint,
	getChessGrid,
	isSame,
	COLORS,
	IS_TRAVERSABLE,
} from './utility/utils';
import defaultData from './utility/data';
import { BoardCell } from './components/BoardCell';
import { PointInput } from './components/PointInput';
import { ColorCoder } from './components/ColorCoder';

function App() {
	const [startPoint, setStartPoint] = useState<IPoint>(defaultData.start);
	const [endPoint, setEndPoint] = useState<IPoint>(defaultData.end);
	const [grid, setGrid] = useState<string[][]>(getChessGrid());
	const [canTraverse, setCanTraverse] = useState<string>(
		IS_TRAVERSABLE.default
	);
	const clearSelection = () => {
		grid.map((row, i) => {
			row.map((_, j) => {
				if (!(isSame(i, j, startPoint) || isSame(i, j, endPoint))) {
					grid[i][j] = COLORS.default;
				}
			});
		});
		setGrid([...grid]);
	};
	const actionButtons = () => {
		return (
			<div className='ActionButtons'>
				<button
					className='button'
					onClick={() => {
						clearSelection();
					}}
				>
					clear selections
				</button>
				<button
					className='button'
					onClick={() => {
						clearSelection();
						const result = traverseBishopMoveMain(startPoint, endPoint);
						if (result === null) {
							setCanTraverse(IS_TRAVERSABLE.no);
						} else {
							console.log(result);
							result.map((e) => (grid[e.x][e.y] = COLORS.selected));
							setGrid([...grid]);
							setCanTraverse(IS_TRAVERSABLE.yes);
						}
					}}
				>
					Traverse
				</button>
			</div>
		);
	};
	const getIsTraverseColor = () =>
		canTraverse == IS_TRAVERSABLE.yes ? 'green' : 'red';
	return (
		<div className='Container'>
			<div className='InputContainer'>
				<PointInput point={startPoint} setPoint={setStartPoint} type='Start' />
				<PointInput point={endPoint} setPoint={setEndPoint} type='End' />
				<div className='ColorCoderContainer'>
					<ColorCoder backgroundColor={COLORS.default} label='Default' />
					<ColorCoder backgroundColor={COLORS.selected} label='Selected' />
					<ColorCoder backgroundColor={COLORS.start} label='Start' />
					<ColorCoder backgroundColor={COLORS.end} label='End' />
				</div>
				{actionButtons()}
				{canTraverse !== IS_TRAVERSABLE.default && (
					<p
						className='TraverseText'
						style={{
							color: getIsTraverseColor(),
							borderColor: getIsTraverseColor(),
						}}
					>
						{canTraverse}
					</p>
				)}
			</div>
			<div className='ChessBoard'>
				<div>
					{grid.map((row, i) => {
						return (
							<div key={`row${i}`} style={{ display: 'flex' }}>
								{row.map((_, j) => {
									const isStart = isSame(i, j, startPoint);
									const isEnd = isSame(i, j, endPoint);
									return (
										<BoardCell
											key={`cell${i}${j}`}
											isStart={isStart}
											isEnd={isEnd}
											i={i}
											j={j}
											setGrid={setGrid}
											grid={grid}
										/>
									);
								})}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
