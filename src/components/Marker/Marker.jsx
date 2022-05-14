import React, { useState } from 'react';
import { MapMarker, Polyline } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import EventMarkerContainer from './EventMarkerContainer';

const MakerContainer = styled.div``;

const Marker = ({ markers, polyLines }) => {
	console.log(markers);
	const [selectedMarker, setSeleteMarker] = useState();

	const onSelectMarker = index => {
		setSeleteMarker(index);
	};

	return (
		<MakerContainer>
			{Object.keys(markers).map((key, index) => {
				return (
					<EventMarkerContainer
						key={key}
						index={index}
						position={markers[key].latlng}
						onSelectMarker={onSelectMarker}
						isClicked={selectedMarker === index}
						title={markers[key].title}
						imageURL={markers[key].imageURL}
						date={markers[key].date}
						address={markers[key].address}
					/>
				);
			})}
			{polyLines.map((line, index) => (
				<Polyline key={index} path={[line]} />
			))}
		</MakerContainer>
	);
};

export default Marker;
