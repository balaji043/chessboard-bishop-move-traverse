import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BishopMoveTraverse } from './pages/bishop-move-traverse/bishop-move-traverse';
import { Home } from './pages/Home';
import { NavLinks } from './utility/utils';

export const App = () => {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to={NavLinks.HOME}>Home</Link>
						</li>
						<li>
							<Link to={NavLinks.BISHOP_MOVE_TRAVERSE}>Bishop Traverse</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path={NavLinks.HOME} element={<Home />} />
					<Route
						path={NavLinks.BISHOP_MOVE_TRAVERSE}
						element={<BishopMoveTraverse />}
					/>
				</Routes>
			</div>
		</Router>
	);
};
