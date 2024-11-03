type ChallengeCardContentProps = {
	description: string;
};

export default function ChallengeCardContent({ description }: ChallengeCardContentProps) {
	return (
		<article>
			<p className="opacity-55 text-sm">{description}</p>
		</article>
	);
}
