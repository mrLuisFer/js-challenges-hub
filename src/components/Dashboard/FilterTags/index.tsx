import { useState } from 'react';
import { tags } from '../../../constants/challenges';
import { useChallengesStore } from '../../../lib/stores/challengesStore';

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
		<section className="px-8 pt-4 flex items-center gap-4">
			{tagsList.map((tag) => {
				const isSelected = tagSelected === tag;
				return (
					<button
						key={tag}
						className={`text-sm py-1 px-2 bg-[var(--app-yellow)] filter rounded-lg text-[var(--app-blue)] hover:font-semibold hover:text-[var(--app-dark-blue)] cursor-pointer transition-all ${
							isSelected ? 'font-bold brightness-100' : 'brightness-90'
						}`}
						onClick={() => handleFilterByTag(tag)}
					>
						{tag}
					</button>
				);
			})}
		</section>
	);
}
