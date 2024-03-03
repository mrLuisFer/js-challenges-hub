import { useCommentActions } from '../../../../hooks/useCommentActions';
import {
	CommentHeaderCreatedAtStyled,
	CommentHeaderProfileImageStyled,
	CommentHeaderProfileNameStyled,
	CommentHeaderProfileStyled,
	CommentHeaderStyled,
} from './Header.styles';
import HeaderActions from './HeaderActions';
import { MobileHidden } from '../../../Reply/Reply.styles';
import { AsComment, Comment } from '../../../../types/index.types';

export default function Header({
	comment,
	as,
	setIsEditing,
	isEditing,
	setIsReplying,
}: {
	comment: Comment;
	as: AsComment;
	setIsEditing: (value: boolean) => void;
	isEditing: boolean;
	setIsReplying: (value: boolean | ((prevState: boolean) => boolean)) => void;
}) {
	const username = comment.user.username;
	const { isAuthor } = useCommentActions({ comment, as });

	return (
		<CommentHeaderStyled>
			<CommentHeaderProfileStyled>
				<CommentHeaderProfileImageStyled
					src={comment.user.image.png}
					alt={username}
					loading="lazy"
				/>
				<CommentHeaderProfileNameStyled>
					{username}
					{isAuthor ? <span>you</span> : null}
				</CommentHeaderProfileNameStyled>
				<CommentHeaderCreatedAtStyled>{comment.createdAt}</CommentHeaderCreatedAtStyled>
			</CommentHeaderProfileStyled>
			<MobileHidden>
				<HeaderActions
					as={as}
					comment={comment}
					setIsEditing={setIsEditing}
					setIsReplying={setIsReplying}
					isEditing={isEditing}
				/>
			</MobileHidden>
		</CommentHeaderStyled>
	);
}
