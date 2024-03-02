import styled from "styled-components";

export const CommentContentTextStyled = styled.div`
  font-size: 14px;
  color: var(--comments-grayish-blue);
  margin-bottom: 10px;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContentTextStyled = styled.p`
  span {
    color: var(--comments-moderate-blue);
    font-weight: 500;
    transition: $transition;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
      filter: brightness(1.2);
    }
  }
`;
