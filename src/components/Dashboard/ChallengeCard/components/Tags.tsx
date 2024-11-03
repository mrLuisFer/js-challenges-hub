import { useMemo } from 'react';

type ChallengeCardTagsProps = {
	tags: string[];
};

export default function ChallengeCardTags({ tags }: ChallengeCardTagsProps) {
	const hasNotTags = useMemo(() => !tags.length, [tags]);
	return (
		<>
			{hasNotTags ? null : (
				<div className="flex gap-4 mt-4">
					{tags?.map((tag, index) => (
						<span
							key={index}
							className="py-1 px-2 rounded-lg font-semibold text-sm bg-[var(--app-yellow)] text-[var(--app-dark-blue)]"
						>
							{tag}
						</span>
					))}
				</div>
			)}
		</>
	);
}
