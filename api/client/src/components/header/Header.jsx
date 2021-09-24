import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../config';
import './header.css';

const Header = () => {
	const location = useLocation();
	const [post, setPost] = useState({});
	const path = location.pathname.split('/')[2];

	useEffect(() => {
		const getPost = async () => {
			const res = await axiosInstance.get('/posts/' + path);
			setPost(res.data.username);
		};
		getPost();
	}, [path]);

	return (
		<div className='header'>
			<div className='headerTitles'>
				<span className='headerTitleSm'>
					Dog Name:
					<Link to={`/?user=${post.username}`} className='link'>
						<b> {post.username}</b>
					</Link>
				</span>
				<span className='headerTitleLg'>Blog</span>
			</div>
			<img
				className='headerImg'
				src='https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
				alt='headerImg'
			/>
		</div>
	);
};

export default Header;
