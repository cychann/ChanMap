import React, { useState } from 'react';
import styled from 'styled-components';
import { MapMarker } from 'react-kakao-maps-sdk';

const MarkerContentContainer = styled.div`
	width: 12rem;
	height: 12rem;
`;

const ThumbnailContainer = styled.div`
	position: relative;
	width: 100%;
	height: 7rem;
`;
const Thumbnail = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	transform: translate(50, 50);
	width: 100%;
	height: 100%;
	object-fit: cover;
	margin: auto;
`;

const Title = styled.div`
	font-size: 1rem;
`;

const Date = styled.div`
	font-size: 1rem;
`;

const Location = styled.div`
	font-size: 1rem;
`;

const EventMarkerContainer = ({
	position,
	title,
	isClicked,
	onSelectMarker,
	index,
	imageURL,
	date,
	address,
}) => {
	const [isVisible, setIsVisible] = useState(false);

	const onClickMarker = () => {
		setIsVisible(!isVisible);
		onSelectMarker(index);
	};

	return (
		<MapMarker position={position} onClick={onClickMarker}>
			{isVisible && isClicked && (
				<MarkerContentContainer>
					<ThumbnailContainer>
						<Thumbnail src={imageURL} />
					</ThumbnailContainer>
					<Title>{title}</Title>
					<Date>{date}</Date>
					<Location>{address}</Location>
				</MarkerContentContainer>
			)}
		</MapMarker>
	);
};

export default EventMarkerContainer;
