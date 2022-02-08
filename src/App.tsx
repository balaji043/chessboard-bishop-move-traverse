import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from 'src/components/NavBar';
import { BishopMoveTraverse, Grid, Sudoku, Home } from 'src/pages';
import { NavLinks } from 'src/utility/utils';
export const App: React.FC = () => {
	return (
		<div className='h-screen w-screen overflow-y-auto'>
			<Router>
				<NavBar />
				<Routes>
					<Route path={NavLinks.HOME} element={<Home />} />
					<Route path={NavLinks.GRID} element={<Grid />} />
					<Route
						path={NavLinks.BISHOP_MOVE_TRAVERSE}
						element={<BishopMoveTraverse />}
					/>
					<Route path={NavLinks.SUDOKU} element={<Sudoku />} />
				</Routes>
			</Router>
		</div>
	);
};
