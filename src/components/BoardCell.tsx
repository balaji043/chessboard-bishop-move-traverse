import { FC } from 'react';
export interface IBoardCell {
	color: string;
	onClick: () => void;
}
export const BoardCell: FC<IBoardCell> = ({ children, color, onClick, }) => {
	// console.log(`Cell Rendered ${children} ${color}`)
	return (
		<button
			onClick={() => onClick()}
			className={`h-14 w-14 border-2 m-2 rounded-md ${color}`}
		>
			{children}
		</button>
	);
};
