import { Link } from 'react-router-dom';
import { Challenge } from '../../../../lib/types/Challenge.ts';
import ChallengeCardThumbnail from '@/views/Challenges/Dashboard/ChallengeCard/components/Thumbnail.tsx';
import ChallengeCardHeader from '@/views/Challenges/Dashboard/ChallengeCard/components/Header.tsx';
import ChallengeCardContent from '@/views/Challenges/Dashboard/ChallengeCard/components/Content.tsx';
import ChallengeCardTags from '@/views/Challenges/Dashboard/ChallengeCard/components/Tags.tsx';

export default function ChallengeCard({
	challengeInfo: challenge,
	index,
}: {
	challengeInfo: Challenge;
	index: number;
}) {
	return (
		<Link to={challenge.route ?? ''} key={index} className="animate-in">
			<article
				key={index}
				className="bg-slate-800 hover:bg-slate-900 max-w-80 rounded-xl transition border-2 border-transparent hover:border-orange-300 group hover:shadow"
			>
				{challenge?.image ? (
					<ChallengeCardThumbnail
						src={challenge.image || ''}
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
		</Link>
	);
}
