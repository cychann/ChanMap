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
			{Object.keys(markers).map((key, index) => {
				return (
					<EventMarkerContainer
						key={key}
						index={index}
						marker={markers[key]}
						onSelectMarker={onSelectMarker}
						isClicked={selectedMarker === index}
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
