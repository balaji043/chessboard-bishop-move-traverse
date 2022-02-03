import React, { FC } from 'react';
interface IProps {
	children: string | React.ReactNode;
	className?: string;
	onClick: (e: React.MouseEvent<HTMLElement>) => void;
}
export const Button: FC<IProps> = ({ children, onClick, className = '' }) => {
	return (
		<button
			onClick={onClick}
			className={`bg-green-400 text-white text-lg px-8 hover:bg-green-800 py-4 text-center inline-block rounded-xl ${className}`}
		>
			{children}
		</button>
	);
};
