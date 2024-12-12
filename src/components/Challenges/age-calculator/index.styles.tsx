import styled from "styled-components";

export const CardStyled = styled.main`
	background-color: #fff;
	padding: 50px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	border-radius: 25px 25px 100px 25px;

	@media (min-width: 700px) {
		width: 500px;
		align-items: flex-start;
		padding: 50px;
		gap: 15px;
	}
`;

export const TextCardStyled = styled.p<{ showed: boolean }>`
	font-size: 0.8rem;
	opacity: ${(props: { showed: boolean }) => (props.showed ? 0.3 : 0)};
	font-weight: 400;
	font-style: italic;
	text-transform: lowercase;
	max-width: 200px;
	align-self: flex-start;
	margin: 0;
	transition: 0.15s ease;
`;
