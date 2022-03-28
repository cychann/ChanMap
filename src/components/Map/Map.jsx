/*global kakao*/
import React, { useEffect, useState } from 'react';

import { SiTarget } from 'react-icons/si';

import markers from './Marker.json';

const Map = () => {
	const [map, setMap] = useState();
	const currentPlaceMap = () => {
		if (navigator.geolocation) {
			// 접속 위치를 얻어옴
			navigator.geolocation.getCurrentPosition(position => {
				let lat = position.coords.latitude; // 위도
				let lon = position.coords.longitude; // 경도

				let locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 얻어온 좌표로 생성
				let message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용

				displayMarker(locPosition, message);
			});
		} else {
			// HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정

			let locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
			let message = 'geolocation을 사용할수 없어요..';

			displayMarker(locPosition, message);
		}
	};

	const displayMarker = (locPosition, message) => {
		// 마커를 생성
		let marker = new kakao.maps.Marker({
			map: map,
			position: locPosition,
		});

		let iwContent = message, // 인포윈도우에 표시할 내용
			iwRemoveable = true;

		// 인포윈도우를 생성
		let infowindow = new kakao.maps.InfoWindow({
			content: iwContent,
			removable: iwRemoveable,
		});

		// 인포윈도우를 마커위에 표시
		infowindow.open(map, marker);

		// 지도 중심좌표를 접속위치로 변경
		map.setCenter(locPosition);
	};

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

		Object.keys(markers).map(key => {
			//  마커 생성
			markers[key].map(marker => {
				return new kakao.maps.Marker({
					map: map, // 마커를 표시할 지도
					position: new kakao.maps.LatLng(marker.lat, marker.lon), // 마커를 표시할 위치
					title: marker.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
				});
			});

			// Polyline 생성
			let polyline = new kakao.maps.Polyline({
				map: map,
				path: [
					markers[key].map(marker => {
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
