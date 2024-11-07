import { PropsWithChildren, createContext } from 'react';
import { Comment } from '../types/index.types.ts';
import { useCommentsStore } from '@/views/Challenges/interactive-comments/store/commentsStore.ts';

interface CommentsContextProps {
	comments: Comment[] | undefined;
	// eslint-disable-next-line no-unused-vars
	setComments: (comments: Comment[]) => void;
}

export const CommentsContext = createContext<CommentsContextProps>({} as CommentsContextProps);

export const CommentsProvider = ({ children }: PropsWithChildren) => {
	const { comments, setComments } = useCommentsStore();

	return (
		<CommentsContext.Provider
			value={{
				comments,
				setComments,
			}}
		>
			{children}
		</CommentsContext.Provider>
	);
};
