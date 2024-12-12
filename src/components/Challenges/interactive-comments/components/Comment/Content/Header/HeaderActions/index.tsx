import iconReply from "../../../images/icon-reply.svg?url";
import iconDelete from "../../../images/icon-delete.svg?url";
import iconEdit from "../../../images/icon-edit.svg?url";
import { useCommentActions } from "../../../../../hooks/useCommentActions";
import {
	CommentHeaderActionsButtonStyled,
	CommentHeaderActionsStyled,
	CommentHeaderReplyButtonStyled,
} from "./HeaderActions.styles";
import { useEditingComment } from "../../../../../hooks/useEditingComment";
import { type AsComment, type Comment } from "../../../../../types/index.types";
import { useContext } from "react";
import { ReplyContext } from "@/components/Challenges/interactive-comments/context/ReplyContext";

export default function HeaderActions({
	as,
	comment,
	setIsEditing,
	isEditing,
}: {
	as: AsComment;
	comment: Comment;
	// eslint-disable-next-line no-unused-vars
	setIsEditing: (value: boolean) => void;
	isEditing: boolean;
}) {
	const { handleDeleteComment, isAuthor } = useCommentActions({ comment, as });
	const { onToggleEditContent } = useEditingComment({
		comment,
		isAuthor,
		as,
		setIsEditing,
		isEditing,
	});
	const { setIsReplying } = useContext(ReplyContext);

	return (
		<>
			{isAuthor ? (
				<CommentHeaderActionsStyled>
					<CommentHeaderActionsButtonStyled onClick={handleDeleteComment}>
						<img src={iconDelete} alt="delete" loading="lazy" />
						Delete
					</CommentHeaderActionsButtonStyled>
					<CommentHeaderActionsButtonStyled onClick={() => onToggleEditContent(true)}>
						<img src={iconEdit} alt="edit" loading="lazy" />
						Edit
					</CommentHeaderActionsButtonStyled>
				</CommentHeaderActionsStyled>
			) : (
				<CommentHeaderReplyButtonStyled
					onClick={() => {
						if (setIsReplying) setIsReplying((prevState) => !prevState);
					}}
				>
					<img src={iconReply} alt="icon-reply" loading="lazy" />
					Reply
				</CommentHeaderReplyButtonStyled>
			)}
		</>
	);
}
