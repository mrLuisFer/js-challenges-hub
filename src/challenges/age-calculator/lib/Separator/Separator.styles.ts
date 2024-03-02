import styled from "styled-components";

export const SeparatorWrapperStyled = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--age-light-grey);
    z-index: 1;
  }

  @media (min-width: 700px) {
    justify-content: flex-end;
  }
`;

export const SeparatorContainerStyled = styled.button<{ showed: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.showed ? "var(--age-off-black)" : "var(--age-purple)"};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 2;
  border: 1px solid transparent;
  outline-color: var(--age-white);
  transition: 0.15s ease;

  &:hover {
    border: 1px solid var(--age-purple);
    filter: brightness(0.9);
    background-color: var(--age-off-black);
  }

  &:active {
    transform: scale(0.9);
  }

  & > img {
    width: 25px;
    height: 25px;
  }
`;
