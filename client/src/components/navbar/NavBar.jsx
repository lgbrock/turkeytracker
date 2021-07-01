import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import './navbar.css';

const NavBar = () => {
	const { user, dispatch } = useContext(Context);

	const PF = 'http://localhost:5000/images/';

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT' });
	};

	return (
		<div className='nav'>
			<div className='navLeft'>
				<i className='navIcon fab fa-github'></i>
				<i className='navIcon fab fa-twitter'></i>
				<i className='navIcon fab fa-facebook'></i>
				<i className='navIcon fab fa-instagram'></i>
			</div>
			<div className='navCenter'>
				<ul className='navList'>
					<li className='navListItem'>
						<Link className='link' to='/'>
							Home
						</Link>
					</li>
					<li className='navListItem'>
						<Link className='link' to='/'>
							About
						</Link>
					</li>
					<li className='navListItem'>
						<Link className='link' to='/'>
							Contact
						</Link>
					</li>
					<li className='navListItem'>
						<Link className='link' to='/write'>
							Write
						</Link>
					</li>
					<li className='navListItem' onClick={handleLogout}>
						{user && 'Logout'}
					</li>
				</ul>
			</div>
			<div className='navRight'>
				{user ? (
					<Link to='/settings'>
						<img className='navImg' src={PF + user.profilePic} alt='' />
					</Link>
				) : (
					<ul className='navList'>
						<li className='navListItem'>
							<Link className='link' to='/login'>
								Login
							</Link>
						</li>
						<li className='navListItem'>
							<Link className='link' to='/register'>
								Register
							</Link>
						</li>
					</ul>
				)}
				<i className='navBarIcon fas fa-search'></i>
			</div>
		</div>
	);
};

export default NavBar;
