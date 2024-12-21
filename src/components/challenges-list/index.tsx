import { useChallengesStore } from "@/stores/challengesStore.js";
import NotFound from "./NotFound.js";
import ChallengeCard from "./challenge-card";
import BuildingMoreCard from "./BuildingMoreCard.js";

export default function ChallengesRender() {
	const { filteredChallenges } = useChallengesStore();

	return (
		<>
			{filteredChallenges.length ? (
				<section className="grid h-full justify-center gap-4 pt-12 sm:grid-cols-2 lg:grid-cols-3">
					<BuildingMoreCard />
					{filteredChallenges.map((challenge, index) => (
						<ChallengeCard key={index} challengeInfo={challenge} index={index} />
					))}
				</section>
			) : (
				<NotFound />
			)}
		</>
	);
}
