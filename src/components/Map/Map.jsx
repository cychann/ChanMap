/*global kakao*/
import React, { useEffect, useState } from 'react';

import { SiTarget } from 'react-icons/si';

import place from './place.json';

const Map = () => {
	const [map, setMap] = useState();

	useEffect(() => {
		let container = document.getElementById('map');
		let options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 4,
		};
		let map = new kakao.maps.Map(container, options);
		setMap(map);

		// add zoomControl bar
		let zoomControl = new kakao.maps.ZoomControl();
		map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		// map zoom in/out animation
		map.setLevel(4, {
			animate: {
				duration: 500,
			},
		});

		Object.keys(place.markers).map(key => {
			//  마커 생성
			place.markers[key].map(marker => {
				return new kakao.maps.Marker({
					map: map,
					position: new kakao.maps.LatLng(marker.lat, marker.lon),
					title: marker.title,
					clickable: true,
				});
			});

			// Polyline 생성
			let polyline = new kakao.maps.Polyline({
				map: map,
				path: [
					place.markers[key].map(marker => {
						return new kakao.maps.LatLng(marker.lat, marker.lon);
					}),
				],
				strokeWeight: 2,
				strokeColor: '#FF00FF',
				strokeOpacity: 0.8,
				strokeStyle: 'dashed',
			});

			polyline.setMap(map);
		});

		currentPlaceMap();
	}, []);

	return (
		<div>
			<div id="map" style={{ width: '100%', height: '90vh' }} />
			<SiTarget
				size="25"
				style={{
					position: 'absolute',
					top: '18rem',
					right: '.3rem',
					background: 'white',
					height: '2rem',
					zIndex: '1',
				}}
				onClick={currentPlaceMap}
			/>
		</div>
	);
};

export default Map;
