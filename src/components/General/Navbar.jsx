import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@geist-ui/icons'; // Importing the Geist UI Menu icon
import '@/styles/Navbar.css';
import HackLogo from '@/images/logo-wordmark-gradient.svg';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='navbar'>
			<img src={HackLogo} alt='ACM Hack Logo' className='nav-hack-logo' />

			<div className='hamburger' onClick={toggleMenu}>
				<Menu size={32} />
			</div>

			<ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
				<li>
					<Link to='/' onClick={toggleMenu}>
						Home
					</Link>
				</li>
				<li>
					<Link to='/about' onClick={toggleMenu}>
						About
					</Link>
				</li>
				<li>
					<Link to='/events' onClick={toggleMenu}>
						Events
					</Link>
				</li>
				<li>
					<Link to='/archive' onClick={toggleMenu}>
						Archive
					</Link>
				</li>
				<li>
					<Link
						className='discord-link'
						to='https://discord.gg/3GSPECbCnE'
						onClick={toggleMenu}
					>
						Join Us!
					</Link>
				</li>
			</ul>
		</nav>
	);
}
