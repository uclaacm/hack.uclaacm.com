import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import chevronDown from '../../images/white-chevron-down.svg';
import '../../styles/Announcement.css';

export default function Announcement() {
	const url = '/blog/fall2023-future-interns';

	return (
		<div className='announcement-container'>
			<div className='announcement-card'>
				<Link to={url} className='link-no-style'>
					<div className='announcement-content'>
						<div className='announcement-grid'>
							<div className='announcement-item'>
								<p className='announcement-text'>
									Want to learn more about our internship program? Check out
									this blog post!
								</p>
							</div>
							<div className='announcement-arrow'>
								<img src={chevronDown} alt='Go to featured blog' />
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

Announcement.propTypes = {
	url: PropTypes.string,
};
