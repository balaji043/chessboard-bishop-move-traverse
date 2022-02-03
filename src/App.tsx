import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { BishopMoveTraverse } from './pages/bishop-move-traverse/bishop-move-traverse';
import { Home } from './pages/home/Home';
import { NavLinks } from './utility/utils';
export const App: React.FC = () => {
	return (
		<div className='h-screen w-screen'>
			<Router>
				<NavBar />
				<Routes>
					<Route path={NavLinks.HOME} element={<Home />} />
					<Route
						path={NavLinks.BISHOP_MOVE_TRAVERSE}
						element={<BishopMoveTraverse />}
					/>
				</Routes>
			</Router>
		</div>
	);
};
