import { useCommentActions } from '../../../hooks/useCommentActions';
import { useState } from 'react';
import Header from './Header';
import { useEditingComment } from '../../../hooks/useEditingComment';
import TextContent from './TextContent';
import { CommentContentFooterStyled, CommentContentStyled } from './Content.styles';
import Likes from '../Likes';
import HeaderActions from './Header/HeaderActions';
import { DesktopHidden } from '../../Reply/Reply.styles';
import { AsComment, Comment } from '../../../types/index.types';

export default function Content({ comment, as }: { comment: Comment; as: AsComment }) {
	const [isEditing, setIsEditing] = useState<boolean>(false);

	const { isAuthor } = useCommentActions({ comment, as });

	const { handleUpdatedContent } = useEditingComment({
		isAuthor,
		as,
		comment,
		isEditing,
		setIsEditing,
	});

	return (
		<CommentContentStyled>
			<Header comment={comment} as={as} isEditing={isEditing} setIsEditing={setIsEditing} />
			<TextContent
				isEditing={isEditing}
				comment={comment}
				handleUpdatedContent={handleUpdatedContent}
				setIsEditing={setIsEditing}
			/>
			<DesktopHidden>
				<CommentContentFooterStyled>
					<Likes comment={comment} as={as} />
					<HeaderActions
						as={as}
						comment={comment}
						isEditing={isEditing}
						setIsEditing={setIsEditing}
					/>
				</CommentContentFooterStyled>
			</DesktopHidden>
		</CommentContentStyled>
	);
}
