import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Navbar from './components/General/Navbar';
import Footer from './components/General/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Archive from './pages/Archive';
import NotFound from './pages/NotFound';
import './styles/App.css';
// import { SnowOverlay } from 'react-snow-overlay';

function App() {
	return (
		<div id='app'>
			{/* <SnowOverlay color='rgba(242, 235, 235, 1)' /> */}
			<Navbar />
			<ScrollToTop />
			<Routes>
				<Route path='' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='events' element={<Events />} />
				<Route path='blog/:blogId?' element={<Blog />} />
				<Route path='*' element={<NotFound />} />
				<Route path='archive' element={<Archive />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
