import Likes from './Likes';
import Content from './Content';
import Reply from '../Reply';
import { useContext } from 'react';
import { CommentStyled, ReplyContainer } from './Comment.styles';
import { MobileHidden } from '../Reply/Reply.styles';
import { AsComment, Comment as CommentType } from '../../types/index.types';
import { CommentsContext } from '../../context/CommentsContext';

export default function Comment({ as, comment }: { as: AsComment; comment: CommentType }) {
	const { isReplying } = useContext(CommentsContext);

	return (
		<>
			<CommentStyled asProp={as}>
				<MobileHidden>
					<Likes comment={comment} as={as} />
				</MobileHidden>
				<Content as={as} comment={comment} />
			</CommentStyled>

			{isReplying && (
				<ReplyContainer>
					<Reply as="replies" comment={comment} />
				</ReplyContainer>
			)}
		</>
	);
}
