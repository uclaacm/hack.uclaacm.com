import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import HackLogo from '../images/logo-wordmark-gradient.svg';

export default function Navbar() {
	return (
		<nav className='navbar'>
			<img src={HackLogo} alt='ACM Hack Logo' className='hackLogo' />
			<ul className='navbar-links'>
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
					<Link to='/blog'>Blog</Link>
				</li>
				<li>
					<Link to='/archive'>Archive</Link>
				</li>
			</ul>
		</nav>
	);
}
