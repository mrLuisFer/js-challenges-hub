import styled from 'styled-components';

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	flex: 1;
`;

export const InputLabelStyled = styled.label<{ hasError: boolean }>`
	font-size: 12px;
	color: ${(props) => (props.hasError ? 'var(--age-light-red)' : 'var(--age-smokey-grey)')};
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 3px;
`;

export const InputStyled = styled.input<{ hasError: boolean }>`
	padding: 10px;
	font-size: 1.2rem;
	border-radius: 8px;
	border: 1px solid var(--age-light-grey);
	font-weight: 700;
	color: var(--age-off-black);
	outline-color: var(--age-light-grey);
	outline-width: 1px;
	width: 100%;

	&::-webkit-inner-spin-button {
		display: none;
	}

	&:focus {
		outline-color: var(--age-purple);
	}

	&::selection {
		background-color: var(--age-purple);
		color: var(--age-white);
	}
`;

export const InputErrorStyled = styled.span`
	font-size: 12px;
	color: var(--age-light-red);
	font-weight: 700;
	margin: 0;
`;
