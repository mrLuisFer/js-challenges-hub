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
				className="bg-slate-800 hover:bg-slate-900 max-w-80 rounded-xl transition border-2 border-transparent hover:border-orange-300 group hover:shadow"
			>
				{challenge?.image ? (
					<ChallengeCardThumbnail
						src={challenge.image || ""}
						title={challenge.title}
						description={challenge.description}
					/>
				) : null}
				<div className="p-4 flex flex-col gap-2">
					<ChallengeCardHeader title={challenge.title} level={challenge.level} />
					<ChallengeCardContent description={challenge.description} />
					<ChallengeCardTags tags={challenge.tags} />
				</div>
			</article>
		</a>
	);
}
