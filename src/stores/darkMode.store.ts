import { create } from 'zustand';

export type DarkModeStore = {
	darkMode: boolean;
	setLightMode: () => void;
	setDarkMode: () => void;
	// eslint-disable-next-line no-unused-vars
	toggleDarkMode: (isChecked: boolean) => void;
};

const addDocumentClass = (className: string) => {
	document.documentElement.classList.add(className);
};
const removeDocumentClass = (className: string) => {
	document.documentElement.classList.remove(className);
};
const setOnLocalStorage = (key: string, value: boolean) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const darkModeKey = 'darkMode';
export const useDarkModeStore = create<DarkModeStore>((set) => ({
	darkMode: (() => {
		const darkMode = localStorage.getItem('darkMode');
		console.log({ darkMode });
		const isDarkMode = darkMode ? JSON.parse(darkMode) : false;
		if (isDarkMode) addDocumentClass('dark');
		else removeDocumentClass('dark');
		return isDarkMode;
	})() as boolean,
	setLightMode: () => {
		removeDocumentClass('dark');
		setOnLocalStorage(darkModeKey, false);
		set({ darkMode: false });
	},
	setDarkMode: () => {
		addDocumentClass('dark');
		setOnLocalStorage(darkModeKey, true);
		set({ darkMode: true });
	},
	toggleDarkMode: (isChecked: boolean) => {
		document.documentElement.classList.toggle('dark', isChecked);
		setOnLocalStorage(darkModeKey, isChecked);
		set(() => ({ darkMode: isChecked }));
	},
}));
