/*global kakao*/
import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { SiTarget } from 'react-icons/si';
import styled from 'styled-components';

import Marker from '../Marker/Marker';
import { useLocation, useNavigate } from 'react-router-dom';
import PostMarker from 'components/PostMarker/PostMarker';

const MarkerAddButton = styled.button`
	width: 20rem;
	height: 5rem;
	border-bottom: 1px solid black;
	border-right: 1px solid black;
	background-color: white;
	color: black;
	font-size: 1.5rem;
	margin: 0 1rem;
	border-radius: 0.3rem;
	padding: 0.5rem 0.8rem;
	cursor: pointer;
	z-index: 3;
`;

const MapContainer = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const newMarker = location.state;

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

	const [modalVisible, setModalVisible] = useState(false);

	const [markers, setMarkers] = useState({
		1: {
			id: '1',
			title: '카카오',
			content: '내용임',
			imageURL: 'images/js.png',
			date: '2000-12-09',
			address: '중구 청구로 64',
			latlng: { lat: 33.450705, lng: 126.570677 },
		},
		2: {
			id: '2',
			title: '생태연못',
			content: '내용임',
			imageURL: 'images/js.png',
			date: '2000-12-09',
			address: '중구 청구로 64',
			latlng: { lat: 33.450936, lng: 126.569477 },
		},
		3: {
			id: '3',
			title: '텃밭',
			content: '내용임',
			imageURL: 'images/js.png',
			date: '2000-12-09',
			address: '중구 청구로 64',
			latlng: { lat: 33.450879, lng: 126.56994 },
		},
		4: {
			id: '4',
			title: '근린공원',
			content: '내용임',
			imageURL: 'images/js.png',
			date: '2000-12-09',
			address: '중구 청구로 64',
			latlng: { lat: 33.451393, lng: 126.570738 },
		},
	});

	const [polyLines, setPolyLines] = useState([
		[
			{ lat: 33.450705, lng: 126.570677 },
			{ lat: 33.450936, lng: 126.569477 },
		],
		[
			{ lat: 33.450879, lng: 126.56994 },
			{ lat: 33.451393, lng: 126.570738 },
		],
	]);

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

	const addMarker = marker => {
		console.log(marker);
		setMarkers(markers => {
			const updated = { ...markers };
			updated[marker.id] = marker;
			return updated;
		});
	};

	useEffect(() => {
		console.log(markers);
		if (newMarker) {
			addMarker(newMarker);
		}
		console.log(markers);
	}, []);

	const goMarkerPost = () => {
		navigate('/post');
	};

	const openModal = () => {
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<Map
			center={map.center}
			isPanto={map.isPanto}
			style={{
				width: '100%',
				height: '80vh',
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

			<Marker markers={markers} polyLines={polyLines} />

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

			<MarkerAddButton onClick={openModal} />
			{modalVisible && (
				<PostMarker
					visible={modalVisible}
					closable
					maskClosable
					onClose={closeModal}
					addMarker={addMarker}
				/>
			)}
		</Map>
	);
};

export default MapContainer;
