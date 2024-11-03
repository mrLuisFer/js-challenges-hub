import { create } from 'zustand';
import { Comment } from '@/challenges/interactive-comments/types/index.types.ts';
import jsonData from '@/challenges/interactive-comments/data.ts';

type CommentsStore = {
	comments: Comment[];
	setComments: (comments: Comment[]) => void;
};

export const useCommentsStore = create<CommentsStore>()((set) => ({
	comments: jsonData.comments,
	setComments: (comments: Comment[]) => {
		set(() => ({ comments: comments }));
	},
}));