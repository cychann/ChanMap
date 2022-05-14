/*global kakao*/
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PostForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const PostContatiner = styled.div`
	display: flex;
`;

const PostLeftContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const PostRightContainer = styled.div``;

const Title = styled.input`
	width: 20rem;
	height: 5rem;
	font-size: 2rem;
	color: black;
	font-weight: 700;
	padding-left: 1rem;
	border: 1px solid black;
`;

const Content = styled.input`
	width: 20rem;
	height: 5rem;
	font-size: 1rem;
	color: black;
	font-weight: 700;
	padding-left: 1rem;
	border: 1px solid black;
`;

const Image = styled.div``;

const Date = styled.input`
	width: 20rem;
	height: 5rem;
	font-size: 1rem;
	color: black;
	font-weight: 700;
	padding-left: 1rem;
	border: 1px solid black;
`;

const SearchContainer = styled.div`
	width: 400px;
	height: 45px;
	position: relative;
	border: 0;
	img {
		position: absolute;
		right: 10px;
		top: 10px;
	}
`;

const SearchInput = styled.input`
	border: 0;
	padding-left: 10px;
	background-color: #eaeaea;
	width: 100%;
	height: 100%;
	outline: none;
`;

const SearchResult = styled.div``;

const PlaceSearchButton = styled.button`
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
`;

const SubmitButton = styled.button`
	width: 20rem;
	height: 5rem;
	border-bottom: 1px solid black;
	border-right: 1px solid black;
	background-color: white;
	color: black;
	font-size: 1.5rem;
	margin: 5rem 1rem;
	border-radius: 0.3rem;
	padding: 0.5rem 0.8rem;
	cursor: pointer;
`;

const PostPlace = () => {
	const navigate = useNavigate();

	const formRef = useRef();
	const titleRef = useRef();
	const contentRef = useRef();
	const dateRef = useRef();

	const [searchPlace, SetsearchPlace] = useState([]);
	const [selectedPlace, setSelectedPlace] = useState();

	const handlesearchPlace = e => {
		// SetsearchPlace(e.target.value);
		if (!e.target.value) {
			SetsearchPlace([]);
		}
		SearchPlace(e.target.value);
		console.log(e.target.value);
	};

	const SearchPlace = place => {
		const ps = new kakao.maps.services.Places();
		ps.keywordSearch(`${place}`, (data, status, _pagination) => {
			// const bounds = new kakao.maps.LatLngBounds();

			if (status === kakao.maps.services.Status.OK) {
				// 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
				// LatLngBounds 객체에 좌표를 추가합니다
				let markers = [];

				for (let i = 0; i < data.length; i++) {
					// @ts-ignore
					markers.push({
						position: {
							lat: Number(data[i].y),
							lng: Number(data[i].x),
						},
						content: data[i].place_name,
						address: data[i].address_name,
						id: data[i].id,
					});
					// bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
				}

				SetsearchPlace(markers);

				// 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
			}
		});
	};

	const SelectPlace = place => {
		setSelectedPlace(place);
	};

	const onSubmit = event => {
		event.preventDefault();
		const marker = {
			id: selectedPlace.id,
			title: titleRef.current.value || `제목`,
			content: contentRef.current.value || `내용`,
			date: dateRef.current.value || `날짜`,
			address: selectedPlace.address,
			latlng: selectedPlace.position,
			// place: selectedPlace,
			imageURL: 'images/js.png',
		};

		navigate('/', { state: marker });
	};

	return (
		<PostForm ref={formRef}>
			<PostContatiner>
				<PostLeftContainer>
					<Title type="text" name="title" placeholder="제목" ref={titleRef} />
					<Content type="text" name="content" placeholder="내용" ref={contentRef} />
					<Date type="text" name="date" placeholder="날짜(ex. 2020-12-09)" ref={dateRef} />
				</PostLeftContainer>
				<PostRightContainer>
					<SearchContainer>
						<SearchInput onChange={handlesearchPlace} placeholder="장소를 검색하세요" />
						{searchPlace.map(place => (
							<SearchResult
								key={place.id}
								onClick={() => {
									SelectPlace(place);
								}}
							>
								{place.content}
							</SearchResult>
						))}
					</SearchContainer>
				</PostRightContainer>
			</PostContatiner>
			<SubmitButton name="submit" onClick={onSubmit}>
				제출
			</SubmitButton>
		</PostForm>
	);
};

export default PostPlace;
