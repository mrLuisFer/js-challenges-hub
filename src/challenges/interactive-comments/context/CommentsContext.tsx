import { Dispatch, PropsWithChildren, createContext, useState } from 'react';
import jsonData from '../data';
import { Comment } from '../types/index.types';

interface CommentsContextProps {
	comments: Comment[] | undefined;
	setComments: Dispatch<React.SetStateAction<Comment[]>> | undefined;
	isReplying?: boolean;
	setIsReplying?: Dispatch<React.SetStateAction<boolean>> | undefined;
}
export const CommentsContext = createContext<CommentsContextProps>({} as CommentsContextProps);

export const CommentsProvider = ({ children }: PropsWithChildren) => {
	const [comments, setComments] = useState(jsonData.comments);
	const [isReplying, setIsReplying] = useState(false);

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
