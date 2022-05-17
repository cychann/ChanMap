import Login from 'components/Login/Login';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Map from './components/Map/ MapContainer';
import ResponsiveLayout from './layouts/responsive.layout';
import GlobalStyles from './styles/GlobalStyles';

function App({ authService }) {
	return (
		<>
			<GlobalStyles />
			<Router>
				<Routes>
					<Route path="/" element={<Login authService={authService} />} />
					<Route path="/Map" element={<Map authService={authService} />} />
				</Routes>
				{/* <ResponsiveLayout>
					
				</ResponsiveLayout> */}
			</Router>
		</>
	);
}

export default App;
