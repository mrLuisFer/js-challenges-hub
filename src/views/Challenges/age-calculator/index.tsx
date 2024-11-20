import AgeInputs from './lib/AgeInputs';
import Separator from './lib/Separator';
import AgePreview from './lib/AgePreview/AgePreview';
import { CardStyled, TextCardStyled } from './index.styles.tsx';
import { useCallback, useEffect, useState } from 'react';
import { TDate, TDatePlurals } from './types';
import { isObjectEmpty } from '@/utils/isObjectEmpty.ts';

export default function AgeCalculator() {
	const [date, setDate] = useState<TDate>({
		day: 20,
		month: 9,
		year: 2003,
	});
	const [showAge, setShowAge] = useState<boolean>(false);
	const [newDate, setNewDate] = useState<TDatePlurals>({} as TDatePlurals);

	const getCurrentDate = useCallback(() => {
		const now = new Date();
		const currentYear = now.getFullYear();
		const currentMonth = now.getMonth() + 1;
		const currentDay = now.getDate();

		let years = currentYear - (date?.year ?? 0);
		let months = currentMonth - (date?.month ?? 0);
		let days = currentDay - (date?.day ?? 0);

		if (months < 0 || (months === 0 && days < 0)) {
			years--;
		}

		if (months < 0) {
			months += 12;
		}

		if (days < 0) {
			days += 30;
		}

		return { years, months, days };
	}, [date?.day, date?.month, date?.year]);

	useEffect(() => {
		if (isObjectEmpty(date)?.isEmpty) return;
		const newDate = getCurrentDate();
		setNewDate(newDate);
	}, [date, getCurrentDate]);

	return (
		<div className="bg-gray-200 min-h-screen py-8 flex justify-center items-start">
			<CardStyled>
				<AgeInputs setShowAge={setShowAge} date={date} setDate={setDate} />
				<Separator
					showAge={showAge}
					onClick={() => {
						setNewDate(getCurrentDate());
					}}
				/>
				<AgePreview newDate={newDate} />
				<TextCardStyled showed={showAge}>change the value of inputs to get your age</TextCardStyled>
			</CardStyled>
		</div>
	);
}
