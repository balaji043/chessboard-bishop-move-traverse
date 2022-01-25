import { useState } from 'react';
import './App.css';
import { traverseBishopMove } from './bishopTraversable';
import { IPoint, getChessGrid, isSame, COLORS, IS_TRAVERSABLE } from './utils';
import defaultData from './data';
import { PointInput } from './PointInput';
import { FC } from 'react';

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
						const result = traverseBishopMove(
							startPoint.x,
							startPoint.y,
							endPoint.x,
							endPoint.y
						);
						if (result != null) {
							console.log(result);
							result.map((e) => {
								grid[e[0]][e[1]] = COLORS.selected;
							});
							setGrid([...grid]);
							setCanTraverse(IS_TRAVERSABLE.yes);
						} else {
							setCanTraverse(IS_TRAVERSABLE.no);
						}
					}}
				>
					Traverse
				</button>
			</div>
		);
	};
	return (
		<div className='Container'>
			<div className='InputContainer'>
				<PointInput point={startPoint} setPoint={setStartPoint} type='Start' />
				<PointInput point={endPoint} setPoint={setEndPoint} type='End' />
				{actionButtons()}
				{canTraverse !== IS_TRAVERSABLE.default && (
					<p
						className='TraverseText'
						style={{
							color: canTraverse == IS_TRAVERSABLE.yes ? 'green' : 'red',
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
										<ChessBoardCell
											key={`cell${i}${j}`}
											i={i}
											j={j}
											isStart={isStart}
											isEnd={isEnd}
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

interface IChessBoardCell {
	isStart: boolean;
	isEnd: boolean;
	i: number;
	j: number;
	grid: string[][];
	setGrid: (grid: string[][]) => void;
}
const ChessBoardCell: FC<IChessBoardCell> = ({
	isStart,
	isEnd,
	grid,
	i,
	j,
	setGrid,
}) => {
	return (
		<button
			onClick={() => {
				if (!isStart && !isEnd) {
					if (grid[i][j] === COLORS.selected) grid[i][j] = COLORS.default;
					else grid[i][j] = COLORS.selected;
					setGrid([...grid]);
				}
			}}
			className='Box'
			style={{
				backgroundColor: isStart
					? COLORS.start
					: isEnd
					? COLORS.end
					: grid[i][j],
			}}
		>
			[{`${i},${j}`}]
		</button>
	);
};
export default App;
