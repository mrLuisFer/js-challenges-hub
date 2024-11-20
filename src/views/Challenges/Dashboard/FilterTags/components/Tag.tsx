import { Button } from '@/components/ui/button.tsx';
import { useChallengesStore } from '@/lib/stores/challengesStore.ts';
import { useMemo, useState } from 'react';

export default function FilterTag({ tag }: { tag: string }) {
	const [tagSelected, setTagSelected] = useState<string | undefined>(undefined);
	const { setFilteredChallenges, challenges } = useChallengesStore();

	const isSelected = useMemo(() => {
		return tagSelected === tag;
	}, [tag, tagSelected]);

	const handleFilterByTag = (tag: string) => {
		const isSameTag = tagSelected === tag;
		setTagSelected(isSameTag ? undefined : tag);

		if (isSameTag) {
			setFilteredChallenges(challenges);
			return;
		}

		const filteredChallenges = challenges.filter((challenge) => {
			return challenge.tags.includes(tag);
		});
		setFilteredChallenges(filteredChallenges);
	};

	return (
		<Button
			key={tag}
			className={`transition hover:shadow select-none active:scale-95 font-semibold ${
				isSelected
					? 'bg-orange-400 dark:bg-orange-200 hover:bg-orange-400 hover:dark:bg-orange-300 italic'
					: 'dark:bg-slate-500 hover:dark:bg-slate-400'
			}`}
			onClick={() => handleFilterByTag(tag)}
		>
			{tag}
		</Button>
	);
}
