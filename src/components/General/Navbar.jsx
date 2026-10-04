import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from '@geist-ui/icons';
import '../../styles/Navbar.css';
import HackLogo from '../../images/logo-wordmark-gradient.svg';

export default function Navbar({ playHomeIntro }) {
	const [animationBegun, setAnimationBegun] = useState(!playHomeIntro);
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();
	const isHomePage = location.pathname === '/';
	const navbarRef = useRef(null);
	const menuToggleRef = useRef(null);

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
		if (isOpen && navbarRef.current?.querySelector('.navbar-links')?.contains(document.activeElement)) {
			menuToggleRef.current?.focus();
		}
		window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
	};

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = event => {
			if (event.key === 'Escape') {
				event.preventDefault();
				setIsOpen(false);
				if (window.scrollY <= 50) setIsScrolled(false);
				menuToggleRef.current?.focus();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isOpen]);

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


	useEffect(() => {
		let animationTimer;

		if (isHomePage && playHomeIntro) {
			setAnimationBegun(false);
			animationTimer = setTimeout(() => {
				setAnimationBegun(true);
			}, 2200);
		} else {
			setAnimationBegun(true);
		}

		return () => {
			if (animationTimer) clearTimeout(animationTimer);
		};
	}, [isHomePage, playHomeIntro]);

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
			} ${isHomePage && !animationBegun ? 'hidden-navbar' : ''}`}
		>
			<Link to='/' onClick={closeMenu} className='nav-hack'>
				<img src={HackLogo} alt='ACM Hack Logo' className='nav-hack-logo' />
			</Link>

			{/* Show hamburger only when isMobile is true (screen width <= 950px) */}
			{isMobile && (
				<button
					ref={menuToggleRef}
					type='button'
					className='hamburger'
					aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
					aria-expanded={isOpen}
					aria-controls='navbar-links'
					onClick={toggleMenu}
				>
					<Menu size={32} aria-hidden='true' />
				</button>
			)}

			{/* Toggle 'active' class based on isOpen state */}
			<ul id='navbar-links' className={`navbar-links ${isOpen ? 'active' : ''}`}>
				<li>
					<Link to='/' onClick={closeMenu} className={location.pathname === '/' ? 'active-link' : ''}>
						Home
					</Link>
				</li>
				<li>
					<Link to='/blog' onClick={closeMenu} className={location.pathname === '/blog' ? 'active-link' : ''}>
						Blog
					</Link>
				</li>
				<li>
					<Link to='/workshops' onClick={closeMenu} className={location.pathname === '/workshops' ? 'active-link' : ''}>
						Workshops
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
