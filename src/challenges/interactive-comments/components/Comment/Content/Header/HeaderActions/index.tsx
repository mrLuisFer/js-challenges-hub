import iconReply from '../../../images/icon-reply.svg';
import iconDelete from '../../../images/icon-delete.svg';
import iconEdit from '../../../images/icon-edit.svg';
import { useCommentActions } from '../../../../../hooks/useCommentActions';
import {
	CommentHeaderActionsButtonStyled,
	CommentHeaderActionsStyled,
	CommentHeaderReplyButtonStyled,
} from './HeaderActions.styles';
import { useEditingComment } from '../../../../../hooks/useEditingComment';
import { AsComment, Comment } from '../../../../../types/index.types';
import { useContext } from 'react';
import { CommentsContext } from '../../../../../context/CommentsContext';

export default function HeaderActions({
	as,
	comment,
	setIsEditing,
	isEditing,
}: {
	as: AsComment;
	comment: Comment;
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
	const { setIsReplying } = useContext(CommentsContext);

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
