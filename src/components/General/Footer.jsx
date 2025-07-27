import React from 'react';
import { Facebook, Instagram, Github, MessageCircle } from '@geist-ui/icons';
import '../../styles/Footer.css';

export default function Footer() {
	return (
		<div className='footer-container'>
			<footer className='footer'>
				<div className='left-container'>
					<a href='https://instagram.com/uclahack' target='_blank' rel='noopener noreferrer' className='icon-link'>
						<Instagram size={32} />
					</a>
					<a href='https://facebook.com/acmhack' target='_blank' rel='noopener noreferrer' className='icon-link'>
						<Facebook size={32} />
					</a>
					<a href='https://github.com/uclaacm' target='_blank' rel='noopener noreferrer' className='icon-link'>
						<Github size={32} />
					</a>
					<a href='https://discord.gg/3GSPECbCnE' target='_blank' rel='noopener noreferrer' className='icon-link'>
						<MessageCircle size={32} />
					</a>
				</div>
				<div className='right-container'>
					<div>hack@uclaacm.com</div>
					<div>© ACM Hack</div>
				</div>
			</footer>
		</div>
	);
}
