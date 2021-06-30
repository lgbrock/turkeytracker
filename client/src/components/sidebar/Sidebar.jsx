import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
	const [cats, setCats] = useState([]);

	useEffect(() => {
		const getCats = async () => {
			const res = await axios.get('/categories');
			setCats(res.data);
		};
		getCats();
	}, []);
	return (
		<div className='sidebar'>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>About Me</span>
				<img
					src='https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg'
					alt='sideBarImg'
				/>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quaerat
					necessitatibus ratione nostrum recusandae, incidunt quisquam, labore
					ipsa nihil iste sunt laborum possimus!
				</p>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>Categories</span>
				<ul className='sidebarList'>
					{cats.map((c) => (
						<Link to={`/?cat=${c.name}`} className='link'>
							<li className='sidebarListItem'>{c.name}</li>
						</Link>
					))}
				</ul>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>Follow Us</span>
				<div className='sidebarSocial'>
					<i className='sidebarIcon fab fa-github'></i>
					<i className='sidebarIcon fab fa-twitter'></i>
					<i className='sidebarIcon fab fa-facebook'></i>
					<i className='sidebarIcon fab fa-instagram'></i>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
