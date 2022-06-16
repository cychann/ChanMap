import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ModalWrapper = styled.div`
	box-sizing: border-box;
	display: ${props => (props.visible ? 'block' : 'none')};
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;
	overflow: auto;
	outline: 0;
`;

const ModalOverlay = styled.div`
	box-sizing: border-box;
	display: ${props => (props.visible ? 'block' : 'none')};

	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 999;
`;

const ModalInner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	position: relative;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
	background-color: white;
	border-radius: 10px;
	width: 70%;
	height: 80%;
	top: 0%;
	margin: 0 auto;
	/* padding: 40px 20px; */
`;

const ArticleContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	/* flex-direction: column; */
	/* justify-content: center;
	align-items: center; */
`;

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

const Image = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	transform: translate(50, 50);
	width: 100%;
	height: 100%;
	object-fit: cover;
	margin: auto;
`;

const ArticleInfo = styled.div`
	width: 50rem;
`;

const Title = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: auto;
	font-size: 2rem;
	color: black;
	font-weight: 700;
	margin: 1rem 1rem;
	padding: 0.5rem 0.5rem;
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: auto;
	font-size: 1rem;
	color: black;
	font-weight: 700;
	margin: 1rem 0.5rem;
	padding: 0.5rem 1rem;
`;

const Date = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 3rem;
	font-size: 1rem;
	color: black;
	font-weight: 700;
	margin: 1rem 1rem;
	padding: 0.5rem 0.5rem;
`;

const Address = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 10rem;
	height: 3rem;
	font-size: 1rem;
	color: black;
	font-weight: 700;
	padding-left: 1rem;
	margin: 1rem 1rem;
	padding: 0.5rem 0.5rem;
`;

const PlaceDetail = ({ onClose, maskClosable, closable, visible, marker }) => {
	const { title, imageURL, date, address, content } = marker;
	const onMaskClick = e => {
		if (e.target === e.currentTarget) {
			onClose(e);
		}
	};

	const close = e => {
		if (onClose) {
			onClose(e);
		}
	};

	return (
		<ModalOverlay visible={visible}>
			<ModalWrapper onClick={maskClosable ? onMaskClick : null} tabIndex="-1" visible={visible}>
				<ModalInner tabIndex="0">
					<ArticleContainer>
						<ImageContainer>
							<Image src={imageURL} />
						</ImageContainer>
						<ArticleInfo>
							<Title>{title}</Title>
							<Content>{content}</Content>
							<Date>{date}</Date>
							<Address>{address}</Address>
							<FontAwesomeIcon
								icon={faPenToSquare}
								style={{ cursor: 'pointer', marginRight: '2rem' }}
							/>
							<FontAwesomeIcon icon={faTrash} style={{ cursor: 'pointer' }} />
						</ArticleInfo>
					</ArticleContainer>
				</ModalInner>
			</ModalWrapper>
		</ModalOverlay>
	);
};

export default PlaceDetail;
