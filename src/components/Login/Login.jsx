import Navbar from 'components/Navbar/Navbar';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ authService }) => {
	const navigate = useNavigate();

	const onLogin = event => {
		const loginRoute = event.currentTarget.innerHTML;
		authService.login(loginRoute).then(console.log);
	};

	const goToMap = userId => {
		navigate('/Map', { id: userId });
	};

	useEffect(() => {
		authService.onAuthChange(user => {
			user && goToMap(user);
		});
	}, []);

	return (
		<div>
			{/* <Navbar /> */}
			<div>Login</div>
			<button onClick={onLogin}>Google</button>
			{/* <button onClick={onLogin}>Github</button> */}
		</div>
	);
};
export default Login;
