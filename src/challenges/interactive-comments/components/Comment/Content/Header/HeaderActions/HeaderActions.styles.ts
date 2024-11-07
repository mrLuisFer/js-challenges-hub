import styled from 'styled-components';
import { queries } from '../../../../../utils/mediaQueries';

export const CommentHeaderActionsStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const CommentHeaderActionsButtonStyled = styled.button`
	background-color: transparent;
	font-weight: 700;
	display: flex;
	align-items: center;
	gap: 5px;
	transition: 0.2s ease;
	padding: 5px;
	border-radius: 5px;
	user-select: none;
	border: 1px solid transparent;

	&:hover {
		border-color: #dfe5ec;
		background-color: #dfe5ec;
	}

	&:first-child {
		color: var(--comments-soft-red);

		&:active {
			filter: brightness(0.9);
		}
	}

	&:last-child {
		color: var(--comments-moderate-blue);

		&:active {
			filter: brightness(0.9);
		}
	}
`;

export const CommentHeaderReplyButtonStyled = styled.button`
	font-size: 14px;
	font-weight: 500;
	color: var(--comments-moderate-blue);
	display: flex;
	gap: 10px;
	align-items: center;
	padding: 5px;
	border-radius: 5px;
	transition: 0.2s ease;
	user-select: none;
	background-color: transparent;
	border: 1px solid transparent;


	&:hover {
		background: var(--comments-light-grayish-blue);
		border-color: #dfe5ec;
		background-color: #dfe5ec;
	}

	&:active {
		filter: brightness(0.9);
	}

	@media (${queries.tablet}) {
	}
`;
