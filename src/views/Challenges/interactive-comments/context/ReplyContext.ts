import { createContext, Dispatch, SetStateAction } from 'react';

type ReplyType = {
	isReplying: boolean;
	setIsReplying: Dispatch<SetStateAction<boolean>>;
};

export const ReplyContext = createContext<ReplyType>({} as ReplyType);
