import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthServcie from 'service/auth_service';
import { firebaseApp } from 'service/firebase';

const authService = new AuthServcie(firebaseApp);
ReactDOM.render(
	<React.StrictMode>
		<App authService={authService} />
	</React.StrictMode>,
	document.getElementById('root'),
);
