import AgeInputs from "./lib/AgeInputs";
import Separator from "./lib/Separator";
import AgePreview from "./lib/AgePreview/AgePreview";
import { CardStyled, TextCardStyled } from "./index.styles";
import { useState } from "react";
import { TDate, NewDate } from "./types";

export default function AgeCalculator() {
  const [date, setDate] = useState<TDate>({
    day: undefined,
    month: undefined,
    year: undefined,
  });
  const [showAge, setShowAge] = useState<boolean>(false);
  const [newDate, setNewDate] = useState<NewDate>({} as NewDate);

  const getCurrentDate = () => {
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

    setNewDate({ years, months, days });
  };

  return (
    <div className="bg-gray-200 min-h-screen py-8 flex justify-center items-start">
      <CardStyled>
        <AgeInputs setShowAge={setShowAge} date={date} setDate={setDate} />
        <Separator showAge={showAge} onClick={getCurrentDate} />
        <AgePreview newDate={newDate} />
        <TextCardStyled showed={showAge}>
          change the value of inputs to get your age
        </TextCardStyled>
      </CardStyled>
    </div>
  );
}
