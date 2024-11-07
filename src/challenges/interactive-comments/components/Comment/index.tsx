import Likes from './Likes';
import Content from './Content';
import Reply from '../Reply';
import { CommentStyled, ReplyContainer } from './Comment.styles';
import { AsComment, Comment as CommentType } from '../../types/index.types';
import { useState } from 'react';
import { ReplyContext } from '../../context/ReplyContext';

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
