import { Dispatch, SetStateAction } from 'react';
import Input from '../Input';
import { AgesContainerStyled } from './AgeInputs.styles';
import { TDate } from '../../types';

type AgeInputsProps = {
	date?: {
		day?: number;
		month?: number;
		year?: number;
	};
	setShowAge?: Dispatch<SetStateAction<boolean>>;
	setDate?: Dispatch<SetStateAction<TDate>>;
};
export default function AgeInputs({ date, setShowAge, setDate }: AgeInputsProps) {
	return (
		<AgesContainerStyled>
			<Input
				label="day"
				setValue={(value) => setDate?.({ ...date, day: value })}
				value={date?.day}
				setShowAge={setShowAge}
				defaultValue={date?.day}
			/>
			<Input
				label="month"
				setValue={(value) => setDate?.({ ...date, month: value })}
				setShowAge={setShowAge}
				defaultValue={date?.month}
				value={date?.month}
			/>
			<Input
				label="year"
				setValue={(value) => setDate?.({ ...date, year: value })}
				setShowAge={setShowAge}
				defaultValue={date?.year}
				value={date?.year}
			/>
		</AgesContainerStyled>
	);
}
