import { useState } from "react";
import { useGetUser } from "../../hooks/useGetUser";
import { useCommentActions } from "../../hooks/useCommentActions";
import {
  DesktopHidden,
  MobileHidden,
  ReplyButtonStyled,
  ReplyFooterActionsStyled,
  ReplyImageStyled,
  ReplyStyled,
  ReplyTextareaStyled,
} from "./Reply.styles";
import { AsComment, Comment } from "../../types/index.types";

export default function Reply({
  as = "comment",
  comment,
}: {
  as?: AsComment;
  comment?: Comment;
}) {
  const [value, setValue] = useState("");
  const { user } = useGetUser();
  const isReply = as === "replies";
  const { handleAddComment, handleAddReply } = useCommentActions({
    as,
    comment,
  });

  function handleSendReply() {
    if (!value) return;
    if (isReply) handleAddReply(value);
    else if (as === "comment") handleAddComment(value);
    setValue("");
  }

  return (
    <ReplyStyled isReply={isReply}>
      <MobileHidden>
        <ReplyImageStyled
          src={user.image.png}
          alt={user.username}
          title={user.username}
          loading="lazy"
        />
      </MobileHidden>
      <ReplyTextareaStyled
        placeholder="Add a comment..."
        rows={5}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <MobileHidden>
        <ReplyButtonStyled onClick={handleSendReply} className="reply__button">
          {isReply ? "reply" : "send"}
        </ReplyButtonStyled>
      </MobileHidden>
      <DesktopHidden>
        <ReplyFooterActionsStyled>
          <ReplyImageStyled
            src={user.image.png}
            alt={user.username}
            title={user.username}
            loading="lazy"
          />
          <ReplyButtonStyled
            onClick={handleSendReply}
            className="reply__button"
          >
            {isReply ? "reply" : "send"}
          </ReplyButtonStyled>
        </ReplyFooterActionsStyled>
      </DesktopHidden>
    </ReplyStyled>
  );
}
