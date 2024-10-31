import { useState } from 'react';
import { tags } from '../../../constants/challenges';
import { useChallengesStore } from '../../../lib/stores/challengesStore';
import { Button } from '@/components/ui/button';

export default function FilterTags() {
	const [tagSelected, setTagSelected] = useState<string | undefined>(undefined);
	const tagsList = Object.values(tags);
	const { setFilteredChallenges, challenges } = useChallengesStore();

	const handleFilterByTag = (tag: string) => {
		if (tagSelected === tag) {
			setTagSelected(undefined);
			setFilteredChallenges(challenges);
		} else {
			setTagSelected(tag);
			const filteredChallenges = challenges.filter((challenge) => {
				return challenge.tags.includes(tag);
			});
			setFilteredChallenges(filteredChallenges);
		}
	};

	return (
		<section className="px-8 pt-4 flex items-start gap-4 justify-center sm:justify-start">
			<p className="font-semibold text-sm opacity-60">Filter by tags:</p>
			{tagsList.map((tag) => {
				const isSelected = tagSelected === tag;
				return (
					<Button
						key={tag}
						className={isSelected ? 'bg-orange-500 hover:bg-orange-600' : ''}
						onClick={() => handleFilterByTag(tag)}
					>
						{tag}
					</Button>
				);
			})}
		</section>
	);
}
