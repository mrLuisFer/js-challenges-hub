import Comment from "../Comment/index.tsx";
import { RepliesStyled } from "./CommentsSection.styles.ts";
import type { Comment as CommentType } from "../../types/index.types.ts";

export default function CommentsSection({ comment }: { comment: CommentType }) {
	return (
		<>
			<Comment key={comment.id} as="comment" comment={comment} />
			<RepliesStyled>
				{comment.replies &&
					comment?.replies.length > 0 &&
					comment?.replies.map((reply) => <Comment comment={reply} key={reply.id} as="replies" />)}
			</RepliesStyled>
		</>
	);
}
