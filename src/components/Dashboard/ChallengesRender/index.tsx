import { useChallengesStore } from '../../../lib/stores/challengesStore';
import ChallengeCard from '../ChallengeCard';
import NotFound from './NotFound';

export default function ChallengesRender() {
	const { challenges, filteredChallenges } = useChallengesStore();

	return (
		<section className="px-8 pt-12 pb-32 sm:pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
			{challenges.length ? (
				filteredChallenges.map((challenge, index) => (
					<ChallengeCard key={index} challengeInfo={challenge} index={index} />
				))
			) : (
				<NotFound />
			)}
		</section>
	);
}
