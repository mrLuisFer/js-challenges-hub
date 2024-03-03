import { useContext } from 'react';
import { CommentsContext } from './context/CommentsContext';
import CommentsSection from './components/CommentsSection';
import Reply from './components/Reply';
import styled from 'styled-components';

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
	background-color: var(--comments-very-light-gray);
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	font-family: var(--comments-font-family);
	padding-top: 30px;
	padding-bottom: 30px;
	flex-direction: column;

	@media (min-width: 768px) {
		min-width: 100vw;
		padding-top: 50px;
	}
`;

function App() {
	const { comments } = useContext(CommentsContext);

	return (
		<Container>
			<Comments>
				{comments &&
					comments?.map((comment) => <CommentsSection comment={comment} key={comment.id} />)}
			</Comments>
			<Reply />
		</Container>
	);
}

export default App;
