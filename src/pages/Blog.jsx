import React from 'react';
import { useParams } from 'react-router-dom';
import BlogList from '../components/Blog/BlogList';
import BlogPost from '../components/Blog/BlogPost';
import useTitle from '../components/General/useTitle';

export default function Blog() {
	useTitle(' | Blog');

	const { blogId } = useParams();

	return (
		<div id='blog'>{blogId ? <BlogPost blogId={blogId} /> : <BlogList />}</div>
	);
}
