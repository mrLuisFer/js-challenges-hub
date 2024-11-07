import { useEffect } from 'react';
import { Theme } from '../enums/Theme.ts';
import { useThemeStore } from '../context/useThemeStore.ts';

export const useHandleTheme = () => {
	const { setDark, setLight } = useThemeStore();

	useEffect(() => {
		const shouldHaveDarkMode =
			localStorage.theme === Theme.dark ||
			(!(Theme.key in localStorage) &&
				window.matchMedia(`(prefers-color-scheme: ${Theme.dark})`).matches);

		if (shouldHaveDarkMode) {
			setDark();
		} else {
			setLight();
		}
	}, [setDark, setLight]);
};
