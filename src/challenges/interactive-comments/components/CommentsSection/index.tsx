import Comment from "../Comment";
import { RepliesStyled } from "./CommentsSection.styles";
import { Comment as CommentType } from "../../types/index.types";

export default function CommentsSection({ comment }: { comment: CommentType }) {
  return (
    <>
      <Comment key={comment.id} as="comment" comment={comment} />
      <RepliesStyled>
        {comment.replies &&
          comment?.replies.length > 0 &&
          comment?.replies.map((reply) => (
            <Comment comment={reply} key={reply.id} as="replies" />
          ))}
      </RepliesStyled>
    </>
  );
}
