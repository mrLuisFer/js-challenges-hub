import { useCallback, useEffect, useMemo, useState } from 'react';

export const useRandomLabel = (stringArray: string[], trim?: number) => {
	const [label, setLabel] = useState<string | undefined>('');

	const randomIndex = useMemo(() => {
		return Math.floor(Math.random() * stringArray.length);
	}, [stringArray]);

	const trimText = useCallback(
		(text: string) => {
			const trimLength = trim ?? 20;
			if (text.length > trimLength) {
				return text.substring(0, trimLength).trim() + '...';
			}
			return text + '...';
		},
		[trim]
	);

	useEffect(() => {
		const label = stringArray[randomIndex];
		setLabel(trimText(label));
	}, [stringArray, randomIndex, trimText]);

	return label;
};
