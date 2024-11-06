import { ChangeEvent, Dispatch, SetStateAction, useMemo, useState } from 'react';
import { InputContainer, InputErrorStyled, InputLabelStyled, InputStyled } from './Input.styles';
import { labels, maxValues, minValues } from '@/challenges/age-calculator/contants';

type InputProps = {
	label: string;
	error?: string;
	setValue: (value: number) => void;
	setShowAge?: Dispatch<SetStateAction<boolean>>;
	defaultValue?: number;
	value: number | undefined;
};

export default function Input({
	setValue,
	label,
	error,
	setShowAge,
	defaultValue,
	value,
}: InputProps) {
	const [showError, setShowError] = useState(false);

	const isDay = useMemo(() => label === labels.day, [label]);
	const isMonth = useMemo(() => label === labels.month, [label]);
	const isYear = useMemo(() => label === labels.year, [label]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>, fieldType: string) => {
		const inputValue = +event.target.value;
		setShowError(false);
		setShowAge?.(false);

		const validators = {
			[labels.day]: () => inputValue <= maxValues.day,
			[labels.month]: () => inputValue <= maxValues.month,
			[labels.year]: () => inputValue <= maxValues.year,
		};

		if (validators[fieldType]?.()) {
			setValue(inputValue);
		}

		const isDayError = isDay && (inputValue < 1 || inputValue > maxValues.day);
		const isMonthError = isMonth && (inputValue < 1 || inputValue > maxValues.month);
		const isYearError = isYear && (inputValue < 1900 || inputValue > maxValues.year);

		if (isDayError || isMonthError || isYearError) {
			setShowError(true);
		}
	};

	return (
		<InputContainer>
			<InputLabelStyled hasError={showError} htmlFor={`${label}-input`}>
				{label}
			</InputLabelStyled>
			<InputStyled
				id={`${label}-input`}
				type="number"
				onChange={(event) => handleChange(event, label)}
				hasError={showError}
				max={maxValues[label]} // day, month, year
				min={minValues[label]}
				pattern="\d*"
				defaultValue={defaultValue}
				value={value || undefined}
			/>
			{showError ? <InputErrorStyled>{error}</InputErrorStyled> : null}
		</InputContainer>
	);
}
