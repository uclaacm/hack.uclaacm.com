import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../../data/blogs';
import NotFound from '../../pages/NotFound';
import ReactMarkdown from 'react-markdown';

function BlogPost() {
	const { blogId } = useParams();
	const blog = blogs.find(b => b.id === blogId);
	const [content, setContent] = useState('');

	useEffect(() => {
		if (blog && blog.markdown) {
			fetch(blog.markdown)
				.then(response => response.text())
				.then(text => setContent(text));
		}
	}, [blog]);

	if (!blog) {
		return <NotFound />;
	}

	return (
		<div id='blogpost'>
			<ReactMarkdown className='markdown-container'>{content}</ReactMarkdown>
		</div>
	);
}

export default BlogPost;
