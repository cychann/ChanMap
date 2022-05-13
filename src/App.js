import PostMarker from 'components/PostMarker/PostMarker';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Map from './components/Map/ MapContainer';
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
						<Route path="/post" element={<PostMarker />} />
					</Routes>
				</ResponsiveLayout>
			</Router>
		</>
	);
}

export default App;
