import React from 'react';

import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';

import COLOR from '../../constants/color.constant';
import { darken, lighten } from 'polished';

const Nav = styled.nav`
	padding: 0.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 10vh;
`;

const NavLeft = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Logo = styled.img`
	width: 5rem;
	height: 5rem;
`;

const MapName = styled.span`
	font-size: 2rem;
`;

const Search = styled.div`
	display: flex;
	position: relative;
`;
const SearchInput = styled.input`
	background-color: ${lighten(0.3, COLOR.PRIMARY)};
	width: 25rem;
	height: 2.5rem;
	border-radius: 0.7rem;
	padding-left: 1rem;
`;

const LavRight = styled.div`
	margin-right: 2rem;
`;

const Route = styled.span`
	font-size: 1.2rem;
	cursor: pointer;
	padding: 0.7rem;
	border-radius: 0.5rem;

	&:hover {
		background-color: ${darken(0.1, COLOR.BACKGROUND)};
	}
`;

const Login = styled.span`
	font-size: 1.2rem;
	margin-left: 2rem;
	cursor: pointer;
	padding: 0.7rem;
	border-radius: 0.5rem;

	&:hover {
		background-color: ${darken(0.1, COLOR.BACKGROUND)};
	}
`;
const Navbar = props => {
	return (
		<Nav>
			<NavLeft>
				<Logo src="/images/avatar.png" alt="avatar" />
				<MapName>ChanMap</MapName>
			</NavLeft>
			<Search>
				<GoSearch size={25} style={{ position: 'absolute', right: '1rem', top: '0.5rem' }} />
				<SearchInput placeholder="장소를 입력하세요.." />
			</Search>
			<LavRight>
				<Route>내 루트</Route>
				<Login>로그인</Login>
			</LavRight>
		</Nav>
	);
};

export default Navbar;
