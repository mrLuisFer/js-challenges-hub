import { useChallengesStore } from '../../lib/stores/challengesStore';
import ChallengeCard from './ChallengeCard';

export default function ChallengesRender() {
	const { challenges, filteredChallenges } = useChallengesStore();

	return (
		<section className="px-8 pt-12 pb-32 sm:pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
			{challenges.length ? (
				filteredChallenges.map((challenge, index) => (
					<ChallengeCard key={index} challengeInfo={challenge} index={index} />
				))
			) : (
				<div className="flex items-center justify-center h-full w-full mt-20">
					<h2 className="text-2xl font-bold animate-pulse">Challenges not found!</h2>
				</div>
			)}
		</section>
	);
}
