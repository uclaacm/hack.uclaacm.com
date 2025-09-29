import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from '@geist-ui/icons';
import '../../styles/Navbar.css';
import HackLogo from '../../images/logo-wordmark-gradient.svg';

export default function Navbar() {
	const [animationBegun, setAnimationBegun] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();
	const isHomePage = location.pathname === '/';
	const navbarRef = useRef(null);

	const toggleMenu = () => {
		if (isOpen) {
			setIsOpen(false);
		if (isScrolled && window.scrollY <= 50) setIsScrolled(false);
		} else {
			setIsOpen(true);
			if (!isScrolled) setIsScrolled(true);
		}
	};

	const closeMenu = () => {
		setIsOpen(false);
		window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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

		const animationTimer = setTimeout(() => {
			setAnimationBegun(true);
    }, 2000);

		return () => {
      clearTimeout(animationTimer);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				if (!isOpen) setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isOpen]);

	return (
		<nav
			ref={navbarRef}
			className={`navbar ${
				isHomePage && !isScrolled ? 'transparent' : 'scrolled'
			} ${animationBegun ? '' : 'hidden-navbar'}`}
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
					<Link to='/' onClick={closeMenu} className={location.pathname === '/' ? 'active-link' : ''}>
						Home
					</Link>
				</li>
				<li>
					<Link to='/blog' onClick={closeMenu} className={location.pathname.startsWith('/blog') ? 'active-link' : ''}>
						Blog
					</Link>
				</li>
				<li>
					<Link to='/workshops' onClick={closeMenu} className={location.pathname.startsWith('/workshops') ? 'active-link' : ''}>
						Archive
					</Link>
				</li>
				<li className='apply'>
					<a
						className='apply-link'
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
