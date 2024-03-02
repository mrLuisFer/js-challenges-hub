import styled from "styled-components";
import { queries } from "../../../../../utils/mediaQueries";

export const CommentHeaderActionsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (${queries.tablet}) {
  }
`;

export const CommentHeaderActionsButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: default;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: 0.2s ease;
  padding: 5px;
  border-radius: 5px;
  user-select: none;

  &:first-child {
    color: var(--comments-soft-red);

    &:hover {
      background: var(--comments-pale-red);
    }

    &:active {
      filter: brightness(0.9);
    }
  }

  &:last-child {
    color: var(--comments-moderate-blue);

    &:hover {
      background: var(--comments-light-grayish-blue);
    }

    &:active {
      filter: brightness(0.9);
    }
  }
`;

export const CommentHeaderReplyButtonStyled = styled.button`
  font-size: 14px;
  font-weight: 500;
  color: var(--comments-moderate-blue);
  cursor: default;
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  transition: 0.2s ease;
  user-select: none;
  background-color: transparent;
  border: none;

  &:hover {
    background: var(--comments-light-grayish-blue);
  }

  &:active {
    filter: brightness(0.9);
  }
  @media (${queries.tablet}) {
  }
`;
