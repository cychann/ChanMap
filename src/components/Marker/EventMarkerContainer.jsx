import React, { useState } from 'react';
import styled from 'styled-components';
import { MapMarker } from 'react-kakao-maps-sdk';
import PlaceDetail from 'components/PlaceDetail/PlaceDetail';

const MarkerContentContainer = styled.div`
	width: 12rem;
	height: 12rem;
	cursor: pointer;
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
const EventMarkerContainer = ({ isClicked, onSelectMarker, index, marker }) => {
	const { latlng, title, imageURL, date, address } = marker;

	const [infoVisible, setInfoVisible] = useState(false);

	const [detailModalVisible, setDetailModalVisible] = useState(false);

	const onClickMarker = () => {
		setInfoVisible(!infoVisible);
		onSelectMarker(index);
	};

	const openDetailModal = () => {
		setDetailModalVisible(true);
	};

	const closeDetailModal = () => {
		setDetailModalVisible(false);
	};

	return (
		<>
			<MapMarker position={latlng} onClick={onClickMarker}>
				{infoVisible && isClicked && (
					<MarkerContentContainer onClick={openDetailModal}>
						<ThumbnailContainer>
							<Thumbnail src={imageURL} />
						</ThumbnailContainer>
						<Title>{title}</Title>
						<Date>{date}</Date>
						<Location>{address}</Location>
					</MarkerContentContainer>
				)}
			</MapMarker>
			{detailModalVisible && (
				<PlaceDetail
					visible={detailModalVisible}
					closable
					maskClosable
					onClose={closeDetailModal}
					marker={marker}
				/>
			)}
		</>
	);
};

export default EventMarkerContainer;
