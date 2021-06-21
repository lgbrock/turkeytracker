import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
	const user = false;
	return (
		<div className="nav">
			<div className="navLeft">
				<i className="navIcon fab fa-github"></i>
				<i className="navIcon fab fa-twitter"></i>
				<i className="navIcon fab fa-facebook"></i>
				<i className="navIcon fab fa-instagram"></i>
			</div>
			<div className="navCenter">
				<ul className="navList">
					<li className="navListItem">
						<Link className="link" to="/">
							Home
						</Link>
					</li>
					<li className="navListItem">
						<Link className="link" to="/">
							About
						</Link>
					</li>
					<li className="navListItem">
						<Link className="link" to="/">
							Contact
						</Link>
					</li>
					<li className="navListItem">
						<Link className="link" to="/write">
							Write
						</Link>
					</li>
					<li className="navListItem">{user && 'Logout'}</li>
				</ul>
			</div>
			<div className="navRight">
				{user ? (
					<img
						className="navImg"
						src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
						alt="profilePicture"
					/>
				) : (
					<ul className="navList">
						<li className="navListItem">
							<Link className="link" to="/login">
								Login
							</Link>
						</li>
						<li className="navListItem">
							<Link className="link" to="/register">
								Register
							</Link>
						</li>
					</ul>
				)}
				<i className="navBarIcon fas fa-search"></i>
			</div>
		</div>
	);
};

export default NavBar;
