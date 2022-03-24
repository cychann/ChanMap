import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const DesktopLayout = props => {
	return (
		<div>
			<Navbar />
			<div>
				<div style={{ width: '100%', height: '100%', marginTop: '7rem' }}>{props.children}</div>
			</div>
		</div>
	);
};

export default DesktopLayout;
