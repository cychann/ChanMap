import React, { useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';

const EventMarkerContainer = ({ position, content, isClicked, onSelectMarker, index }) => {
	const [isVisible, setIsVisible] = useState(false);

	const onClickMarker = () => {
		setIsVisible(!isVisible);
		onSelectMarker(index);
	};

	return (
		<MapMarker position={position} onClick={onClickMarker}>
			{isVisible && isClicked && content}
		</MapMarker>
	);
};

export default EventMarkerContainer;
