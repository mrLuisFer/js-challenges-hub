import { Dispatch, PropsWithChildren, createContext, useState } from 'react';
import jsonData from '../data';
import { Comment } from '../types/index.types';

interface CommentsContextProps {
	comments: Comment[] | undefined;
	setComments: Dispatch<React.SetStateAction<Comment[]>> | undefined;
}
export const CommentsContext = createContext<CommentsContextProps>({} as CommentsContextProps);

export const CommentsProvider = ({ children }: PropsWithChildren) => {
	const [comments, setComments] = useState(jsonData.comments);

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
