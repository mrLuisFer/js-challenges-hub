import type { TDatePlurals } from "../../../types/index.ts";
import AgeLabel from "../AgeLabel/index.tsx";
import { AgePreviewStyled } from "./AgePreview.styles.ts";

export default function AgePreview({ newDate }: { newDate: TDatePlurals }) {
	return (
		<AgePreviewStyled>
			<AgeLabel label="years" value={newDate.years} />
			<AgeLabel label="months" value={newDate.months} />
			<AgeLabel label="days" value={newDate.days} />
		</AgePreviewStyled>
	);
}
