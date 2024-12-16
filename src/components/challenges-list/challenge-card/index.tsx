import type { Challenge } from "@/types/Challenge";
import ChallengeCardThumbnail from "./components/Thumbnail";
import ChallengeCardHeader from "./components/Header";
import ChallengeCardContent from "./components/Content";
import ChallengeCardTags from "./components/Tags";

export default function ChallengeCard({
	challengeInfo: challenge,
	index,
}: {
	challengeInfo: Challenge;
	index: number;
}) {
	return (
		<a href={challenge.route ?? ""} key={index} className="animate-in">
			<article
				key={index}
				className="bg-white max-w-80 rounded-md transition border-2 border-transparent border-neutral-200 dark:border-neutral-800 hover:border-blue-300 group hover:shadow-md dark:bg-neutral-900 dark:hover:bg-neutral-950"
			>
				{challenge?.image ? (
					<ChallengeCardThumbnail
						src={challenge.image || ""}
						title={challenge.title}
						description={challenge.description}
					/>
				) : null}
				<div className="p-4 flex flex-col gap-4">
					<ChallengeCardHeader title={challenge.title} level={challenge.level} />
					<ChallengeCardContent description={challenge.description} />
					<ChallengeCardTags tags={challenge.tags} />
				</div>
			</article>
		</a>
	);
}
