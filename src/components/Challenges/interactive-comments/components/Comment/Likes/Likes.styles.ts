import styled from "styled-components";
import { maxQueries, queries } from "../../../utils/mediaQueries.js";

export const LikesStyled = styled.div`
	display: flex;
	flex-direction: row;
	background-color: var(--comments-light-gray);
	padding: 10px;
	border-radius: 10px;
	width: 90px;
	justify-content: space-between;
	user-select: none;

	@media (${maxQueries.mobile}) {
		display: none;
	}

	@media (${queries.tablet}) {
		align-items: center;
		height: 80px;
		flex-direction: column;
		margin-top: 5px;
		width: 50px;
		justify-content: center;
	}

	@media (${queries.desktop}) {
		margin-top: 0;
		padding-top: 0;
		padding-bottom: 0;
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		height: 100%;
	}
`;

export const LikesButtonStyled = styled.button<{
	isPressed: boolean;
}>`
	background-color: transparent;
	border: none;
	transition: 0.2s ease;
	display: flex;
	justify-content: center;
	align-items: center;
	filter: ${(props) => (props.isPressed ? "brightness(0.7)" : "")};

	&:hover {
		filter: brightness(0.8);
	}
`;

export const LikesCounterStyled = styled.span<{
	isVoted: boolean;
}>`
	color: hsl(238, 40%, 52%);
	font-weight: 500;
	font-size: 14px;
	transition: 0.2s ease;
	background-color: ${(props) => (props.isVoted ? "#ebeff4" : "")};

	@media (${queries.tablet}) {
		font-size: 16px;
	}
`;
