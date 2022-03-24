/*global kakao*/
import React, { useEffect, useState } from 'react';

const Location = () => {
	const [map, setMap] = useState();
	const currentPlaceMap = () => {
		console.log('asd!~');
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
	}, []);

	return (
		<div>
			<div id="map" style={{ width: '100%', height: '100vh' }} />
			{/* <button
				style={{
					position: 'fixed',
					top: '1rem',
					left: '1rem',
					background: 'red',
					height: '2rem',
					zIndex: '1',
				}}
				onClick={currentPlaceMap}
			>
				현재 위치
			</button> */}
		</div>
	);
};

export default Location;
