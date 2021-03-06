import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';
import { axiosInstance } from '../../config';

const Register = () => {
	const [username, setUsername] = useState([]);
	const [email, setEmail] = useState([]);
	const [password, setPassword] = useState([]);
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		try {
			const res = await axiosInstance.post('/auth/register', {
				username,
				email,
				password,
			});
			// if register successful, redirects to login page
			res.data && window.location.replace('/login');
		} catch (err) {
			setError(true);
		}
	};

	return (
		<div className='register'>
			<span className='registerTitle'>Register</span>
			<form className='registerForm' onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					className='registerInput'
					type='text'
					placeholder='Enter your username...'
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label>Email</label>
				<input
					className='registerInput'
					type='text'
					placeholder='Enter your email...'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Password</label>
				<input
					className='registerInput'
					type='password'
					placeholder='Enter your password...'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className='registerButton'>Register</button>
				<button className='registerLoginButton' type='submit'>
					<Link className='link' to='/login'>
						Login
					</Link>
				</button>
				{error && (
					<span style={{ color: 'red', marginTop: '10px' }}>
						Something went wrong!
					</span>
				)}
			</form>
		</div>
	);
};

export default Register;
