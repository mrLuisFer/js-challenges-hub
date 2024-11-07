import styled from 'styled-components';

export const CommentHeaderStyled = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const CommentHeaderProfileStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const imageSize = '30px';
export const CommentHeaderProfileImageStyled = styled.img`
	width: ${imageSize};
	height: ${imageSize};
	border-radius: 50%;
	object-fit: cover;
`;

export const CommentHeaderProfileNameStyled = styled.h1`
	font-size: 14px;
	color: var(--comments-dark-blue);

	&:not(span) {
		font-weight: 500;
	}

	span {
		background: var(--comments-moderate-blue);
		color: var(--comments-very-light-gray);
		font-size: 12px;
		padding: 3px 5px;
		border-radius: 3px;
		margin: 5px;
		transition: 0.2s ease;

		&:hover {
			filter: brightness(1.1);
		}
	}
`;

export const CommentHeaderCreatedAtStyled = styled.p`
	font-weight: 400;
	color: var(--comments-grayish-blue);
	font-size: 14px;
`;
