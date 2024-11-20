import { CommentsProvider } from './context/CommentsContext.tsx';
import CommentsSection from './components/CommentsSection';
import Reply from './components/Reply';
import styled from 'styled-components';
import { useCommentsStore } from '@/views/Challenges/interactive-comments/store/commentsStore.ts';

export const Comments = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	list-style: none;
	margin: 0;
	padding: 0;
	gap: 10px;

	@media (min-width: $tablet) {
		gap: 15px;
	}
`;

const Container = styled.div`
	background-color: rgb(222, 222, 222);
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	font-family: var(--comments-font-family), sans-serif;
	padding-top: 30px;
	padding-bottom: 30px;
	flex-direction: column;

	@media (min-width: 768px) {
		min-width: 100vw;
		padding-top: 50px;
	}
`;

function InteractiveComments() {
	const { comments } = useCommentsStore();
	return (
		<CommentsProvider>
			<Container>
				<Comments>
					{comments &&
						comments?.map((comment) => <CommentsSection comment={comment} key={comment.id} />)}
				</Comments>
				<Reply />
			</Container>
		</CommentsProvider>
	);
}

export default InteractiveComments;
