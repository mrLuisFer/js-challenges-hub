interface IsObjectEmptyReturn {
	isEmpty: boolean | undefined;
	hasOtherError?: boolean | undefined;
}

export const isObjectEmpty = <T>(obj: T): IsObjectEmptyReturn => {
	const hasConstructor = obj?.constructor === Object;
	if (!hasConstructor) {
		return {
			isEmpty: undefined,
			hasOtherError: true,
		};
	}
	const isEmpty = Object.keys(obj || {})?.length === 0;
	return {
		isEmpty,
		hasOtherError: false,
	};
};
