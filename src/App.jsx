import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Navbar from './components/General/Navbar';
import Footer from './components/General/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Workshops from './pages/Workshops';
import NotFound from './pages/NotFound';
import './styles/App.css';
// import { SnowOverlay } from 'react-snow-overlay';

function App() {
	const { pathname } = useLocation();
	const [playHomeIntro, setPlayHomeIntro] = useState(() => pathname === '/');

	useEffect(() => {
		if (pathname !== '/') setPlayHomeIntro(false);
	}, [pathname]);

	return (
		<div id='app'>
			{/* <SnowOverlay color='rgba(242, 235, 235, 1)' /> */}
			<Navbar playHomeIntro={playHomeIntro} />
			<ScrollToTop />
			<Routes>
				<Route path='' element={<Home playHomeIntro={playHomeIntro} />} />
				<Route path='blog/:blogId?' element={<Blog />} />
				<Route path='*' element={<NotFound />} />
				<Route path='workshops' element={<Workshops />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
