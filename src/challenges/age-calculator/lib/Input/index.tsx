import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { InputContainer, InputErrorStyled, InputLabelStyled, InputStyled } from './Input.styles';

type InputProps = {
	label: string;
	error?: string;
	setValue: (value: number) => void;
	setShowAge?: Dispatch<SetStateAction<boolean>>;
};
export default function Input({ setValue, label, error, setShowAge }: InputProps) {
	const [showError, setShowError] = useState(false);

	const isDay = label === 'day';
	const isMonth = label === 'month';
	const isYear = label === 'year';
	const currentYear = new Date().getFullYear();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const inputValue = +event.target.value;
		setShowError(false);
		setShowAge?.(false);
		setValue(inputValue);

		const isDayError = isDay && (inputValue < 1 || inputValue > 31);
		const isMonthError = isMonth && (inputValue < 1 || inputValue > 12);
		const isYearError = isYear && (inputValue < 1900 || inputValue > 2021);

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
				onChange={handleChange}
				hasError={showError}
				max={isDay ? 31 : isMonth ? 12 : currentYear}
				min={isDay ? 0 : isMonth ? 0 : 1900}
				pattern="\d*"
			/>
			{showError ? <InputErrorStyled>{error}</InputErrorStyled> : null}
		</InputContainer>
	);
}
