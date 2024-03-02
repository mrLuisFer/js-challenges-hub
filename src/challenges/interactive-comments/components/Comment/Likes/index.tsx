import { useState } from "react";
import { useCommentActions } from "../../../hooks/useCommentActions";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";
import {
  LikesButtonStyled,
  LikesCounterStyled,
  LikesStyled,
} from "./Likes.styles";
import { AsComment, Comment } from "../../../types/index.types";

export default function Likes({
  comment,
  as,
}: {
  comment: Comment;
  as: AsComment;
}) {
  const [likes, setLikes] = useState(comment.score);
  const [isPlusVoted, setIsPlusVoted] = useState(false);
  const [isMinusVoted, setIsMinusVoted] = useState(false);
  const { isAuthor } = useCommentActions({ comment, as });

  function handlePlusVote() {
    if (isAuthor) return;
    if (isPlusVoted) {
      setIsPlusVoted(false);
      setLikes(comment.score);
      return;
    }
    setIsPlusVoted(true);
    setIsMinusVoted(false);
    setLikes(comment.score + 1);
  }

  function handleMinusVote() {
    if (isAuthor) return;
    if (isMinusVoted) {
      setIsMinusVoted(false);
      setLikes(comment.score);
      return;
    }
    setIsMinusVoted(true);
    setIsPlusVoted(false);
    setLikes(comment.score - 1);
  }

  return (
    <LikesStyled>
      <LikesButtonStyled onClick={handlePlusVote}>
        <img src={iconPlus} alt="icon-plus" />
      </LikesButtonStyled>
      <LikesCounterStyled>{likes}</LikesCounterStyled>
      <LikesButtonStyled onClick={handleMinusVote}>
        <img src={iconMinus} alt="icon-minus" />
      </LikesButtonStyled>
    </LikesStyled>
  );
}
