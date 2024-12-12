import React from "react";
type ChallengeCardContentProps = {
	description: string;
};

export default function ChallengeCardContent({ description }: ChallengeCardContentProps) {
	return (
		<article>
			<p className="opacity-55 text-sm text-white group-hover:opacity-100 transition">
				{description}
			</p>
		</article>
	);
}
