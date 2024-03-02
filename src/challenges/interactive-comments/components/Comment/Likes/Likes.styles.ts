import styled from "styled-components";
import { queries } from "../../../utils/mediaQueries";

export const LikesStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--comments-light-gray);
  padding: 10px;
  border-radius: 10px;
  width: 90px;
  justify-content: space-between;

  @media (${queries.tablet}) {
    align-items: center;
    height: 80px;
    flex-direction: column;
    margin-top: 5px;
    width: fit-content;
  }
`;

export const LikesButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: default;
  transition: 0.2s ease;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const LikesCounterStyled = styled.span`
  color: var(--comments-moderate-blue);
  font-weight: 500;
  font-size: 14px;

  @media (${queries.tablet}) {
    font-size: 16px;
  }
`;
