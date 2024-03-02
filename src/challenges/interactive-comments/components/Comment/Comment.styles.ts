import styled from "styled-components";
import { queries } from "../../utils/mediaQueries";
import { AsComment } from "../../types/index.types";
import { CommentLineStyled } from "../CommentsSection/CommentsSection.styles";

export const CommentStyled = styled.li<{
  asProp: AsComment;
}>`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  background-color: var(--comments-white);
  transition: 0.2s ease;
  padding: 10px;
  max-width: ${(props) => (props.asProp === "comment" ? "330px" : "290px")};
  border-radius: 10px;
  width: 100%;

  &:hover {
    box-shadow: 0.2px 0.2px 2px 0.5px var(--comments-light-gray);
  }

  @media (${queries.tablet}) {
    padding: 20px;
    max-width: ${(props) => (props.asProp === "comment" ? "600px" : "520px")};
    min-width: ${(props) => (props.asProp === "comment" ? "600px" : "520px")};
  }
`;

export const ReplyContainer = styled(CommentLineStyled)`
  position: relative;
  width: 100%;
`;
