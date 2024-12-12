import { AgeLabelStyled } from "./AgeLabel.styles.js";

export default function AgeLabel({
	value = "--",
	label = "",
}: {
	value?: number | string;
	label: string;
}) {
	return (
		<AgeLabelStyled>
			{value !== undefined ? <p>{value}</p> : <p>--</p>}
			<label>{label}</label>
		</AgeLabelStyled>
	);
}
