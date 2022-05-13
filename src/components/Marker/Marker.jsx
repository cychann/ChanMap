import React, { useState } from 'react';
import { MapMarker, Polyline } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import EventMarkerContainer from './EventMarkerContainer';

const MakerContainer = styled.div``;

const Marker = ({ markers, polyLines }) => {
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
			{polyLines.map((line, index) => (
				<Polyline key={index} path={[line]} />
			))}
		</MakerContainer>
	);
};

export default Marker;
