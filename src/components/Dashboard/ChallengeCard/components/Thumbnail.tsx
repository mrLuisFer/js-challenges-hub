import { AspectRatio } from '@/components/ui/aspect-ratio.tsx';
import { useEffect, useState } from 'react';

type ThumbnailProps = {
	src: string;
	title: string;
	description: string;
};

export default function ChallengeCardThumbnail({ src, title, description }: ThumbnailProps) {
	const [imgRatio, setImgRatio] = useState(1);

	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => {
			setImgRatio(img.width / img.height); // Calculates and sets the aspect ratio (width/height)
		};
	}, [src]);

	return (
		<>
			<AspectRatio ratio={imgRatio}>
				<img
					src={src}
					alt={title}
					aria-description={description}
					aria-label={title}
					className="rounded-t-xl w-80 object-cover"
					loading="lazy"
					draggable="false"
				/>
			</AspectRatio>
		</>
	);
}
