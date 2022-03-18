/*global kakao*/
import React, { useEffect, useState } from 'react';

const Location = () => {
	useEffect(() => {
		let container = document.getElementById('map');
		let options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 4,
		};
		let map = new kakao.maps.Map(container, options);
		// setMap(map);
	}, []);

	return (
		<div>
			<div id="map" style={{ width: '100%', height: '100vh' }} />
			<button
				style={{
					position: 'fixed',
					top: '1rem',
					left: '1rem',
					background: 'red',
					height: '2rem',
					zIndex: '1',
				}}
				// onClick={currentPlaceMap}
			>
				현재 위치
			</button>
		</div>
	);
};

export default Location;
