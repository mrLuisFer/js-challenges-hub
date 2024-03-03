import styled from 'styled-components';

export const AgeLabelStyled = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	font-size: 3rem;
	font-weight: 800;
	font-style: italic;
	line-height: 1.1;

	.age-label p {
		color: var(--age-purple);
		margin: 0;
	}

	.age-label label {
		text-transform: lowercase;
	}
`;
