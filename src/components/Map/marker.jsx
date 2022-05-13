import React, { useState } from 'react';
import { MapMarker, Polyline } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import EventMarkerContainer from './EventMarkerContainer';

const MakerContainer = styled.div``;

const Marker = () => {
	const markers = [
		{
			title: '카카오',
			imageURL: 'images/js.png',
			date: '2000-12-09',
			location: '중구 청구로 64',
			latlng: { lat: 33.450705, lng: 126.570677 },
		},
		{
			title: '생태연못',
			imageURL: 'images/js.png',
			date: '2000-12-09',
			location: '중구 청구로 64',
			latlng: { lat: 33.450936, lng: 126.569477 },
		},
		{
			title: '텃밭',
			imageURL: 'images/js.png',
			date: '2000-12-09',
			location: '중구 청구로 64',
			latlng: { lat: 33.450879, lng: 126.56994 },
		},
		{
			title: '근린공원',
			imageURL: 'images/js.png',
			date: '2000-12-09',
			location: '중구 청구로 64',
			latlng: { lat: 33.451393, lng: 126.570738 },
		},
	];

	const polyLine = [
		[
			{ lat: 33.450705, lng: 126.570677 },
			{ lat: 33.450936, lng: 126.569477 },
		],
		[
			{ lat: 33.450879, lng: 126.56994 },
			{ lat: 33.451393, lng: 126.570738 },
		],
	];

	const [selectedMarker, setSeleteMarker] = useState();

	const onSelectMarker = index => {
		setSeleteMarker(index);
	};
	return (
		<MakerContainer>
			{markers.map((marker, index) => (
				<EventMarkerContainer
					key={`${marker.title}-${marker.latlng}`}
					index={index}
					position={marker.latlng}
					onSelectMarker={onSelectMarker}
					isClicked={selectedMarker === index}
					title={marker.title}
					imageURL={marker.imageURL}
					date={marker.date}
					location={marker.location}
				/>
			))}
			{polyLine.map((line, index) => (
				<Polyline key={index} path={[line]} />
			))}
		</MakerContainer>
	);
};

export default Marker;
