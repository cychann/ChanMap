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

const PlaceInput = styled.input``;

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
	margin: 0 1rem;
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

	const [searchPlace, SetsearchPlace] = useState();

	const handlesearchPlace = e => {
		SetsearchPlace(e.target.value);
	};

	const SearchPlace = () => {
		const ps = new kakao.maps.services.Places();
		ps.keywordSearch(`${searchPlace}`, (data, status, _pagination) => {
			console.log(data);
			if (status === kakao.maps.services.Status.OK) {
				// 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
				// LatLngBounds 객체에 좌표를 추가합니다
				let markers = [];

				for (let i = 0; i < data.length; i++) {
					// @ts-ignore
					markers.push({
						position: {
							lat: data[i].y,
							lng: data[i].x,
						},
						content: data[i].place_name,
					});
				}

				// 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
			}
		});
	};

	const onSubmit = event => {
		event.preventDefault();
		const marker = {
			title: titleRef.current.value || `제목`,
			content: contentRef.current.value || `내용`,
			Date: dateRef.current.value || `날짜`,
			imageURL: 'images/js.png',
		};

		console.log(marker);
	};

	return (
		<>
			<PostForm ref={formRef}>
				<Title type="text" name="title" placeholder="제목" ref={titleRef} />
				<Content type="text" name="content" placeholder="내용" ref={contentRef} />
				<Date type="text" name="date" placeholder="날짜(ex. 2020-12-09)" ref={dateRef} />

				<SubmitButton name="submit" onClick={onSubmit}>
					제출
				</SubmitButton>
			</PostForm>
			<PlaceInput onChange={handlesearchPlace} placeholder="장소를 검색하세요" />
			<PlaceSearchButton onClick={SearchPlace}>클릭</PlaceSearchButton>
		</>
	);
};

export default PostPlace;
