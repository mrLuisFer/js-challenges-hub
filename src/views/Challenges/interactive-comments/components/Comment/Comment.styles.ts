import styled from 'styled-components';
import { queries } from '../../utils/mediaQueries.ts';
import { AsComment } from '../../types/index.types.ts';
import { CommentLineStyled } from '../CommentsSection/CommentsSection.styles.ts';

export const CommentStyled = styled.li<{
	asProp: AsComment;
}>`
	display: flex;
	align-items: flex-start;
	gap: 15px;
	background-color: #fff;
	border: 1px solid #fafafa;
	transition: 0.2s ease;
	padding: 10px;
	max-width: ${(props) => (props.asProp === 'comment' ? '330px' : '290px')};
	border-radius: 10px;
	width: 100%;

	&:hover {
		box-shadow: 1px 1px 2px 1px var(--comments-light-gray);
		border-color: #ccc;
	}

	@media (${queries.tablet}) {
		padding: 20px;
		max-width: ${(props) => (props.asProp === 'comment' ? '600px' : '520px')};
		min-width: ${(props) => (props.asProp === 'comment' ? '600px' : '520px')};
		height: 'fit-content';
	}
`;

export const ReplyContainer = styled(CommentLineStyled)`
	position: relative;
	width: 100%;
`;
