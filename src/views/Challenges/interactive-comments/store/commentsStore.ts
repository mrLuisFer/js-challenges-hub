import { create } from 'zustand';
import { Comment } from '@/views/Challenges/interactive-comments/types/index.types.ts';
import jsonData from '@/views/Challenges/interactive-comments/data.ts';

type CommentsStore = {
	comments: Comment[];
	// eslint-disable-next-line no-unused-vars
	setComments: (comments: Comment[]) => void;
	// eslint-disable-next-line no-unused-vars
	addNewComment: (comment: Comment) => void;
};

export const useCommentsStore = create<CommentsStore>()((set) => ({
	comments: jsonData.comments,
	setComments: (comments: Comment[]) => {
		set(() => ({ comments: comments }));
	},
	addNewComment: (newComment: Comment) => {
		set((prev) => ({ comments: [...prev.comments, newComment] }));
	},
}));
