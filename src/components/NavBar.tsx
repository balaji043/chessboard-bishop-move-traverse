import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { NavLinks } from 'src/utility/utils';

export const NavBar = () => {
	return (
		<nav className='bg-gray-50 py-4 text-black'>
			<div className='max-w-6xl flex justify-between items-center mx-auto'>
				<div className='flex  space-x-4'>
					<AppNavLink label='Home' path={NavLinks.HOME} />
					<AppNavLink label='Grid' path={NavLinks.GRID} />
					<AppNavLink
						label='Bishop Traverse'
						path={NavLinks.BISHOP_MOVE_TRAVERSE}
					/>
					<AppNavLink label='Sudoku' path={NavLinks.SUDOKU} />
				</div>
				<a
					className='px-4 py-2 rounded-md flex-0 group hover:transition-all hover:bg-gray-300 font-blod text-3xl'
					href='https://balaji.host'
					rel='noopener noreferrer'
					target='_blank'
				>
					<span className='lowercase text-blue-700 '>balaji </span>R
				</a>
			</div>
		</nav>
	);
};
const AppNavLink = (props: any) => {
	const location = useLocation();
	return (
		<Link
			className={`rounded-lg px-3 py-2 font-medium transition-all hover:bg-slate-400 hover:text-slate-900 ${
				location.pathname === props.path ? 'bg-slate-200 text-black' : ''
			}`}
			to={props.path}
		>
			{props.label}
		</Link>
	);
};
