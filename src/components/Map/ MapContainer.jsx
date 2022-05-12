import React, { useState } from 'react';
import { Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';
import { SiTarget } from 'react-icons/si';

import place from './place.json';
import Marker from './marker';

const MapContainer = () => {
	const [map, setMap] = useState({
		center: { lat: 33.452613, lng: 126.570888 },
		isPanto: false,
		level: 3,
	});
	const [locationInfo, setLocationInfo] = useState({
		center: {
			lat: 33.450701,
			lng: 126.570667,
		},
		errMsg: null,
		isLoading: true,
	});
	const currentPlaceMap = () => {
		if (navigator.geolocation) {
			// GeoLocation을 이용해서 접속 위치를 얻어옴
			navigator.geolocation.getCurrentPosition(
				position => {
					setLocationInfo(prev => ({
						...prev,
						center: {
							lat: position.coords.latitude,
							lng: position.coords.longitude,
						},
						isLoading: false,
					}));
					setMap({
						center: {
							lat: position.coords.latitude,
							lng: position.coords.longitude,
						},
					});
				},
				err => {
					setLocationInfo(prev => ({
						...prev,
						errMsg: err.message,
						isLoading: false,
					}));
				},
			);
		} else {
			// HTML5의 GeoLocation을 사용할 수 없을때
			setLocationInfo(prev => ({
				...prev,
				errMsg: 'geolocation을 사용할수 없어요..',
				isLoading: false,
			}));
		}
	};

	return (
		<Map
			center={map.center}
			isPanto={map.isPanto}
			style={{
				width: '100%',
				height: '90vh',
			}}
			level={map.level}
		>
			{!locationInfo.isLoading && (
				<MapMarker position={locationInfo.center}>
					<div style={{ padding: '5px', color: '#000' }}>
						{locationInfo.errMsg ? locationInfo.errMsg : '여기에 계신가요?!'}
					</div>
				</MapMarker>
			)}

			<Marker />

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
		</Map>
	);
};

export default MapContainer;
