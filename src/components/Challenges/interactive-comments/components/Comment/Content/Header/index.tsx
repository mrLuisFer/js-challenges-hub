import { useCommentActions } from "../../../../hooks/useCommentActions.ts";
import {
	CommentHeaderCreatedAtStyled,
	CommentHeaderProfileImageStyled,
	CommentHeaderProfileNameStyled,
	CommentHeaderProfileStyled,
	CommentHeaderStyled,
} from "./Header.styles.ts";
import HeaderActions from "./HeaderActions/index.tsx";
import { MobileHidden } from "../../../Reply/Reply.styles.ts";
import { type AsComment, type Comment } from "../../../../types/index.types.ts";

export default function Header({
	comment,
	as,
	setIsEditing,
	isEditing,
}: {
	comment: Comment;
	as: AsComment;
	// eslint-disable-next-line no-unused-vars
	setIsEditing: (value: boolean) => void;
	isEditing: boolean;
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
					isEditing={isEditing}
				/>
			</MobileHidden>
		</CommentHeaderStyled>
	);
}
