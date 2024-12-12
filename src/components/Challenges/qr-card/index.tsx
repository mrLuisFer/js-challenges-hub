import {
	CardContainerStyled,
	CardImageStyled,
	CardLinkStyled,
	CardTextStyled,
	CardTitleStyled,
	ContainerStyled,
} from "./QrCard.styles.js";
import qrImage from "./images/image-qr-code.png?url";

export default function QrCard() {
	return (
		<>
			<ContainerStyled>
				<CardContainerStyled>
					<a href="https://github.com/mrLuisFer" target="_blank" rel="noreferrer noopener">
						<CardImageStyled src={qrImage} rel="nofollow" alt="QR Image" draggable="false" />
					</a>
					<CardTitleStyled className="card__title">
						<CardLinkStyled
							href="https://www.frontendmentor.io/challenges"
							target="_blank"
							rel="noreferrer noopener"
						>
							Improve your front-end skills by building projects
						</CardLinkStyled>
					</CardTitleStyled>
					<CardTextStyled>
						Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
					</CardTextStyled>
				</CardContainerStyled>
			</ContainerStyled>
		</>
	);
}
