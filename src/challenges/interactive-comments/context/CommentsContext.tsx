import React, { Dispatch, PropsWithChildren, createContext, useState } from 'react';
import { Comment } from '../types/index.types';
import { useCommentsStore } from '@/challenges/interactive-comments/store/commentsStore.ts';

interface CommentsContextProps {
	comments: Comment[] | undefined;
	setComments: (comments: Comment[]) => void;
	isReplying?: boolean;
	setIsReplying?: Dispatch<React.SetStateAction<boolean>> | undefined;
}

export const CommentsContext = createContext<CommentsContextProps>({} as CommentsContextProps);

export const CommentsProvider = ({ children }: PropsWithChildren) => {
	const [isReplying, setIsReplying] = useState(false);
	const { comments, setComments } = useCommentsStore();

	return (
		<CommentsContext.Provider
			value={{
				comments,
				setComments,
				isReplying,
				setIsReplying,
			}}
		>
			{children}
		</CommentsContext.Provider>
	);
};
