import { useCommentActions } from "../../../hooks/useCommentActions.ts";
import { useState } from "react";
import Header from "./Header/index.tsx";
import { useEditingComment } from "../../../hooks/useEditingComment.ts";
import TextContent from "./TextContent/index.tsx";
import { CommentContentFooterStyled, CommentContentStyled } from "./Content.styles.ts";
import Likes from "../Likes/index.tsx";
import HeaderActions from "./Header/HeaderActions/index.tsx";
import { DesktopHidden } from "../../Reply/Reply.styles.ts";
import type { AsComment, Comment } from "../../../types/index.types.ts";

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
