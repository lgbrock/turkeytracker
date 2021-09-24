import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';
import { useLocation } from 'react-router';
import { axiosInstance } from '../../config';

const Home = () => {
	const [posts, setPosts] = useState([]);
	// How to search amongst usernames
	const { search } = useLocation();

	useEffect(() => {
		const fetchPosts = async () => {
			// grabs posts data
			const res = await axiosInstance.get('/posts' + search);
			setPosts(res.data);
		};
		fetchPosts();
	}, [search]);
	return (
		<>
			<Header />
			<div className='home'>
				<Posts posts={posts} />
				<Sidebar />
			</div>
		</>
	);
};

export default Home;
