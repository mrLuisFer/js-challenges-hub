import { useState } from 'react';
import { useCommentActions } from '../../../hooks/useCommentActions.ts';
import iconPlus from '../images/icon-plus.svg';
import iconMinus from '../images/icon-minus.svg';
import { LikesButtonStyled, LikesCounterStyled, LikesStyled } from './Likes.styles.ts';
import { AsComment, Comment } from '../../../types/index.types.ts';

export default function Likes({ comment, as }: { comment: Comment; as: AsComment }) {
	const [likes, setLikes] = useState(comment.score);
	const [isPlusVoted, setIsPlusVoted] = useState(false);
	const [isMinusVoted, setIsMinusVoted] = useState(false);
	const { isAuthor } = useCommentActions({ comment, as });
	const imgSize = 13;

	function handlePlusVote() {
		if (isAuthor) return;
		if (isPlusVoted) {
			setIsPlusVoted(false);
			setLikes(comment.score);
			return;
		}
		setIsPlusVoted(true);
		setIsMinusVoted(false);
		setLikes(comment.score + 1);
	}

	function handleMinusVote() {
		if (isAuthor) return;
		if (isMinusVoted) {
			setIsMinusVoted(false);
			setLikes(comment.score);
			return;
		}
		setIsMinusVoted(true);
		setIsPlusVoted(false);
		setLikes(comment.score - 1);
	}

	return (
		<LikesStyled>
			<LikesButtonStyled onClick={handlePlusVote} isPressed={isPlusVoted}>
				<img src={iconPlus} alt="icon-plus" width={imgSize} height={imgSize} />
			</LikesButtonStyled>
			<LikesCounterStyled className="rounded-md p-1" isVoted={isPlusVoted || isMinusVoted}>
				{likes}
			</LikesCounterStyled>
			<LikesButtonStyled onClick={handleMinusVote} isPressed={isMinusVoted}>
				<img src={iconMinus} alt="icon-minus" width={imgSize} height={imgSize} />
			</LikesButtonStyled>
		</LikesStyled>
	);
}
