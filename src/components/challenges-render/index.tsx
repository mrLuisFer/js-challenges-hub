import { useChallengesStore } from "@/stores/challengesStore.js";
import NotFound from "./NotFound.js";
import ChallengeCard from "./challenge-card";

export default function ChallengesRender() {
	const { filteredChallenges } = useChallengesStore();

	return (
		<section className="pt-12 pb-32 sm:pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
			{filteredChallenges.length ? (
				filteredChallenges.map((challenge, index) => (
					<ChallengeCard key={index} challengeInfo={challenge} index={index} />
				))
			) : (
				<NotFound />
			)}
		</section>
	);
}
