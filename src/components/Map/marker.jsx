import React, { useState } from 'react';
import { MapMarker, Polyline } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import EventMarkerContainer from './EventMarkerContainer';

const MakerContainer = styled.div``;

const Marker = () => {
	const markers = [
		{
			content: <div style={{ color: '#000' }}>카카오</div>,
			latlng: { lat: 33.450705, lng: 126.570677 },
		},
		{
			content: <div style={{ color: '#000' }}>생태연못</div>,
			latlng: { lat: 33.450936, lng: 126.569477 },
		},
		{
			content: <div style={{ color: '#000' }}>텃밭</div>,
			latlng: { lat: 33.450879, lng: 126.56994 },
		},
		{
			content: <div style={{ color: '#000' }}>근린공원</div>,
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
					content={marker.content}
					onSelectMarker={onSelectMarker}
					isClicked={selectedMarker === index}
				/>
			))}
			{polyLine.map((line, index) => (
				<Polyline key={index} path={[line]} />
			))}
		</MakerContainer>
	);
};

export default Marker;
