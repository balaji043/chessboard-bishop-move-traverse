import { Link } from 'react-router-dom';
import { NavLinks } from '../utility/utils';

export const NavBar = () => {
	return (
		<nav className='bg-slate-800 py-4 text-white'>
			<div className='max-w-6xl flex mx-auto space-x-4'>
				<AppNavLink label='Home' path={NavLinks.HOME} />
				<AppNavLink
					label='Bishop Traverse'
					path={NavLinks.BISHOP_MOVE_TRAVERSE}
				/>
				<AppNavLink
					label='Sudoku'
					path={NavLinks.SUDOKU}
				/>
			</div>
		</nav>
	);
};
const AppNavLink = (props: any) => {
	return (
		<Link
			className='rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900'
			to={props.path}
		>
			{props.label}
		</Link>
	);
};
