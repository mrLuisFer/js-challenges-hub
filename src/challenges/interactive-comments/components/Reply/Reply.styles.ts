import styled from 'styled-components';
import { queries } from '../../utils/mediaQueries';

export const ReplyStyled = styled.div<{
	isReply: boolean;
}>`
	background-color: var(--comments-white);
	max-width: 600px;
	border-radius: 10px;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 15px;
	transition: 0.2s ease;
	flex-direction: column;
	width: ${(props) => (props.isReply ? '290px' : '330px')};
	padding: 15px;
	margin-left: ${(props) => (props.isReply ? 'auto' : '0px')};

	&:hover {
		box-shadow: 0.2px 0.2px 2px 0.5px var(--comments-light-gray);
	}

	@media (${queries.tablet}) {
		max-width: ${(props) => (props.isReply ? '520px' : '')};
		margin-right: ${(props) => (props.isReply ? '0px' : '')};
		margin-top: ${(props) => (props.isReply ? '' : '15px')};
		flex-direction: row;
		width: 100%;
		padding: 20px;
	}
`;

const imageSize = '40px';
export const ReplyImageStyled = styled.img`
	width: ${imageSize};
	height: ${imageSize};
	object-fit: cover;
	border-radius: 50%;
`;

export const ReplyTextareaStyled = styled.textarea`
	flex: 1;
	padding: 5px;
	resize: none;
	border-color: var(--comments-light-gray);
	border-radius: 10px;
	font-family: var(--comments-font-family);
	width: 100%;

	@media (${queries.tablet}) {
		padding: 10px 20px;
	}
`;

export const ReplyButtonStyled = styled.button`
	background-color: var(--comments-moderate-blue);
	color: var(--comments-white);
	border: none;
	padding: 15px 25px;
	border-radius: 5px;
	cursor: pointer;
	font-weight: 700;
	text-transform: uppercase;
	transition: 0.2s ease;
	width: 90px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;

	&:hover {
		filter: brightness(1.1);
	}

	&:active {
		filter: brightness(0.9);
		transform: scale(0.95);
	}
`;

export const MobileHidden = styled.div`
	display: none;
	@media (${queries.tablet}) {
		display: block;
	}
`;

export const DesktopHidden = styled.div`
	display: block;
	@media (${queries.tablet}) {
		display: none;
	}
`;

export const ReplyFooterActionsStyled = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;
