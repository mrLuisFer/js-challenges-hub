import jsonData from '../data';

export const useGetUser = () => {
	const user = jsonData.currentUser;

	return {
		user,
	};
};
