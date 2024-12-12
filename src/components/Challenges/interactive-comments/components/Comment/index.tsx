import Likes from "./Likes/index.tsx";
import Content from "./Content/index.tsx";
import Reply from "../Reply/index.tsx";
import { CommentStyled, ReplyContainer } from "./Comment.styles.ts";
import type { AsComment, Comment as CommentType } from "../../types/index.types.ts";
import { useState } from "react";
import { ReplyContext } from "../../context/ReplyContext.ts";

export default function Comment({ as, comment }: { as: AsComment; comment: CommentType }) {
	const [isReplying, setIsReplying] = useState(false);

	return (
		<ReplyContext.Provider
			value={{
				isReplying,
				setIsReplying,
			}}
		>
			<CommentStyled asProp={as}>
				<Likes comment={comment} as={as} />
				<Content as={as} comment={comment} />
			</CommentStyled>

			{isReplying && (
				<ReplyContainer>
					<Reply as="replies" comment={comment} />
				</ReplyContainer>
			)}
		</ReplyContext.Provider>
	);
}
