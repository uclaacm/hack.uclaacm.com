import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Blog.css';
import { blogs } from '../../data/blogs';

export default function BlogList() {
	return (
		<div id='bloglist'>
			<h1 className='bloglist-title'>Blog Posts</h1>
			<div className='bloglist-container'>
				{blogs.map(blog => (
					<Link key={blog.id} to={`/blog/${blog.id}`} className='blog-link'>
						<h2 className='blog-title'>{blog.title}</h2>
						<p className='blog-summary'>{blog.summary}</p>
						<p className='blog-metadata'>
							By {blog.author} | {blog.date} | {blog.readTime}
						</p>
					</Link>
				))}
			</div>
		</div>
	);
}
