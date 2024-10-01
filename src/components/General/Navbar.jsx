import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@geist-ui/icons';
import '../../styles/Navbar.css';
import HackLogo from '../../images/logo-wordmark-gradient.svg';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 950) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
				setIsOpen(false);
			}
		};

		handleResize();

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<nav className='navbar'>
			<img src={HackLogo} alt='ACM Hack Logo' className='nav-hack-logo' />

			{/* Show hamburger only when isMobile is true (screen width <= 900px) */}
			{isMobile && (
				<div className='hamburger' onClick={toggleMenu}>
					<Menu size={32} />
				</div>
			)}

			{/* Toggle 'active' class based on isOpen state */}
			<ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/events'>Events</Link>
				</li>
				<li>
					<Link to='/archive'>Archive</Link>
				</li>
				<li>
					<a
						className='discord-link'
						href='https://discord.gg/3GSPECbCnE'
						target='_blank'
						rel='noopener noreferrer'
					>
						Join Us!
					</a>
				</li>
			</ul>
		</nav>
	);
}
