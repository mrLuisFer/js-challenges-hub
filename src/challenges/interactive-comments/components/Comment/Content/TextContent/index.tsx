import { useState } from 'react';
import { CommentContentTextStyled, ContentTextStyled } from './TextContent.styles';
import { Comment } from '../../../../types/index.types';

interface TextContentProps {
	comment: Comment;
	handleUpdatedContent: (editedContent: string) => void;
	isEditing: boolean;
}
export default function TextContent({
	comment,
	handleUpdatedContent,
	isEditing,
}: TextContentProps) {
	const [editedContent, setEditedContent] = useState<string>(
		`${comment.replyingTo ? `@${comment.replyingTo}` : ''} ${comment.content}`
	);

	return (
		<CommentContentTextStyled>
			{isEditing ? (
				<>
					<textarea
						value={editedContent}
						onChange={({ target: { value } }) => setEditedContent(value)}
						className="reply__textarea"
						rows={5}
					/>
					<button
						className="reply__button"
						style={{ marginLeft: 'auto' }}
						onClick={() => handleUpdatedContent(editedContent)}
					>
						Update
					</button>
				</>
			) : (
				<ContentTextStyled>
					{comment?.replyingTo ? <span>@{comment?.replyingTo} </span> : null}
					{comment.content}
				</ContentTextStyled>
			)}
		</CommentContentTextStyled>
	);
}
