import { useState } from 'react';
import './App.css';
import { traverseBishopMove } from './bishopTraversable';
import { IPoint, getChessGrid, isSame, COLORS, IS_TRAVERSABLE } from './utils';
import defaultData from './data';
import { PointInput } from './PointInput';
import { FC } from 'react';
import { useEffect } from 'react';

function App() {
	const [startPoint, setStartPoint] = useState<IPoint>(defaultData.start);
	const [endPoint, setEndPoint] = useState<IPoint>(defaultData.end);
	const [grid, setGrid] = useState<string[][]>(getChessGrid());
	const [canTraverse, setCanTraverse] = useState<string>(
		IS_TRAVERSABLE.default
	);
	useEffect(() => {
		setStart(startPoint);
		setEnd(endPoint);
	}, []);
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
	const resetPoint = (old: IPoint, newPoint: IPoint, color: string) => {
		grid[old.x][old.y] = COLORS.default;
		grid[newPoint.x][newPoint.y] = color;
		setGrid([...grid]);
		if (canTraverse) {
			setCanTraverse(IS_TRAVERSABLE.default);
		}
	};
	const setStart = (point: IPoint) => {
		resetPoint(startPoint, point, COLORS.start);
		setStartPoint(point);
	};
	const setEnd = (point: IPoint) => {
		resetPoint(endPoint, point, COLORS.end);
		setEndPoint(point);
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
						if (result === null) {
							setCanTraverse(IS_TRAVERSABLE.no);
						} else {
							console.log(result);
							result.map((e) => {
								const i = e[0];
								const j = e[1];
								if (isSame(i, j, startPoint)) {
									grid[i][j] = COLORS.start;
								} else if (isSame(i, j, endPoint)) {
									grid[i][j] = COLORS.end;
								} else grid[i][j] = COLORS.selected;
							});
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
				<PointInput point={startPoint} setPoint={setStart} type='Start' />
				<PointInput point={endPoint} setPoint={setEnd} type='End' />
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
									return (
										<ChessBoardCell
											key={`cell${i}${j}`}
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

interface IChessBoardCell {
	isStart?: boolean;
	isEnd?: boolean;
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
				backgroundColor: grid[i][j],
			}}
		>
			[{`${i},${j}`}]
		</button>
	);
};
export default App;
