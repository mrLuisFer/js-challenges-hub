import { tags } from '@/constants/challenges.ts';
import FilterTag from '@/views/Challenges/Dashboard/FilterTags/components/Tag.tsx';

export default function FilterTags() {
	const tagsList = Object.values(tags);

	return (
		<section className="px-8 pt-4 flex flex-col items-start gap-2 justify-center sm:justify-start">
			<p className="font-semibold text-sm opacity-60">Filter by tags:</p>
			<section className="flex gap-3 items-center">
				{tagsList.map((tag) => (
					<FilterTag tag={tag} key={tag} />
				))}
			</section>
		</section>
	);
}
