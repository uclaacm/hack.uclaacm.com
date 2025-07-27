import React from 'react';
import { Link } from 'react-router-dom';
import { User, Calendar, Clock } from '@geist-ui/icons';
import '../../styles/Blog.css';
import { blogs } from '../../data/blogs';

export default function BlogList() {
	return (
		<div id='bloglist'>
			<h1 className='bloglist-title'>Blog Posts</h1>
			<div className='bloglist-container'>
				{blogs.map(blog => (
					<Link key={blog.id} to={`/blog/${blog.id}`} className='blog-link'>
						<div className='blog-title-container'>
							<h2 className='blog-title'>{blog.title}</h2>
						</div>
						<div className='blog-rest-container'>
							<p className='blog-summary'>{blog.summary}</p>
							<p className='blog-metadata'>
								<span className='blog-icon-metadata'>
									<User size={16} /> By {blog.author}
								</span>
								<span className='blog-icon-metadata'>
									<Calendar size={16} /> {blog.date}
								</span>
								<span className='blog-icon-metadata'>
									<Clock size={16} /> {blog.readTime}
								</span>
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
