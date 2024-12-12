import styled from "styled-components";

export const CommentLineStyled = styled.div`
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 6%;
		width: 2px;
		height: 100%;
		background-color: var(--comments-light-gray);
	}
`;

export const RepliesStyled = styled(CommentLineStyled)`
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 15px;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 6%;
		width: 2px;
		height: 100%;
		background-color: var(--comments-light-gray);
	}
`;
