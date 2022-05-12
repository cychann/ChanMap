import { position } from 'polished';
import React from 'react';
import { MapMarker, Polyline } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

const MakerContainer = styled.div``;

const Marker = () => {
	const markers = [
		{
			title: '카카오',
			latlng: { lat: 33.450705, lng: 126.570677 },
		},
		{
			title: '생태연못',
			latlng: { lat: 33.450936, lng: 126.569477 },
		},
		{
			title: '텃밭',
			latlng: { lat: 33.450879, lng: 126.56994 },
		},
		{
			title: '근린공원',
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

	console.log(polyLine);
	return (
		<MakerContainer>
			{markers.map(marker => (
				<MapMarker key={`${marker.title}-${marker.latlng}`} position={marker.latlng} />
			))}
			{polyLine.map((line, index) => (
				<Polyline key={index} path={[line]} />
			))}
			s
		</MakerContainer>
	);
};

export default Marker;
