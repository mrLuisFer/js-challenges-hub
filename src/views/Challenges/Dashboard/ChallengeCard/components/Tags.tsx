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
							className="py-1 px-2 rounded-lg font-semibold text-sm bg-orange-200 text-slate-900 hover:bg-orange-300 transition"
						>
							{tag}
						</span>
					))}
				</div>
			)}
		</>
	);
}
