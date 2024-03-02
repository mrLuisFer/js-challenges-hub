import { HTMLAttributes } from "react";
import iconArrow from "../../assets/images/icon-arrow.svg";
import {
  SeparatorContainerStyled,
  SeparatorWrapperStyled,
} from "./Separator.styles";

type SeparatorProps = {
  showAge: boolean;
  onClick: () => void;
} & HTMLAttributes<HTMLButtonElement>;

export default function Separator(props: SeparatorProps) {
  const { showAge, onClick } = props;

  return (
    <SeparatorWrapperStyled>
      <SeparatorContainerStyled
        title="Get your age"
        onClick={onClick}
        showed={showAge}
      >
        <img
          src={iconArrow}
          alt="Arrow icon"
          loading="lazy"
          draggable="false"
        />
      </SeparatorContainerStyled>
    </SeparatorWrapperStyled>
  );
}
