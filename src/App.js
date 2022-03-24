import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Map from './components/Map/Map';
import ResponsiveLayout from './layouts/responsive.layout';
import GlobalStyles from './styles/GlobalStyles';

function App() {
	return (
		<>
			<GlobalStyles />
			<Router>
				<ResponsiveLayout>
					<Routes>
						<Route path="/" element={<Map />} />
					</Routes>
				</ResponsiveLayout>
			</Router>
		</>
	);
}

export default App;
