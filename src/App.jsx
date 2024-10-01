import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Navbar from './components/General/Navbar';
import Footer from './components/General/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Archive from './pages/Archive';
import './styles/App.css';

function App() {
	return (
		<div id='app'>
			<Navbar />
			<ScrollToTop />
			<Routes>
				<Route path='' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='events' element={<Events />} />
				<Route path='archive' element={<Archive />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
