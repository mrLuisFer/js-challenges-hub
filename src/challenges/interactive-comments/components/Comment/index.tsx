import Likes from "./Likes";
import Content from "./Content";
import Reply from "../Reply";
import { useState } from "react";
import { CommentStyled, ReplyContainer } from "./Comment.styles";
import { MobileHidden } from "../Reply/Reply.styles";
import { AsComment, Comment as CommentType } from "../../types/index.types";

export default function Comment({
  as,
  comment,
}: {
  as: AsComment;
  comment: CommentType;
}) {
  const [isReplying, setIsReplying] = useState(false);

  return (
    <>
      <CommentStyled asProp={as}>
        <MobileHidden>
          <Likes comment={comment} as={as} />
        </MobileHidden>
        <Content as={as} comment={comment} setIsReplying={setIsReplying} />
      </CommentStyled>

      {isReplying && (
        <ReplyContainer>
          <Reply as="replies" comment={comment} />
        </ReplyContainer>
      )}
    </>
  );
}
