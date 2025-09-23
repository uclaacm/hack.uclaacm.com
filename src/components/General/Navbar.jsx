import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from '@geist-ui/icons';
import '../../styles/Navbar.css';
import HackLogo from '../../images/logo-wordmark-gradient.svg';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();
	const isHomePage = location.pathname === '/';
	const navbarRef = useRef(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	useLayoutEffect(() => {
		const updateNavbarHeight = () => {
			if (navbarRef.current) {
				const height = navbarRef.current.offsetHeight;
				document.documentElement.style.setProperty(
					'--navbar-height',
					`${height}px`
				);
			}
		};

		updateNavbarHeight();
		window.addEventListener('resize', updateNavbarHeight);
		return () => window.removeEventListener('resize', updateNavbarHeight);
	}, []);

	// Hook to listen for screen width changes
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

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			ref={navbarRef}
			className={`navbar ${
				isHomePage && !isScrolled ? 'transparent' : 'scrolled'
			}`}
		>
			<Link to='/' onClick={closeMenu} className='nav-hack'>
				<img src={HackLogo} alt='ACM Hack Logo' className='nav-hack-logo' />
			</Link>

			{/* Show hamburger only when isMobile is true (screen width <= 950px) */}
			{isMobile && (
				<div className='hamburger' onClick={toggleMenu}>
					<Menu size={32} />
				</div>
			)}

			{/* Toggle 'active' class based on isOpen state */}
			<ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
				<li>
					<Link to='/' onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li>
					<Link to='/blog' onClick={closeMenu}>
						Blog
					</Link>
				</li>
				<li>
					<Link to='/workshops' onClick={closeMenu} className='archive'>
						Archive
					</Link>
				</li>
				<li className='discord'>
					<a
						className='discord-link'
						href='https://www.uclaacm.com/internship'
						target='_blank'
						rel='noopener noreferrer'
						onClick={closeMenu}
					>
						Apply
					</a>
				</li>
			</ul>
		</nav>
	);
}
