import Header from '@/views/Challenges/Dashboard/Header';
import FilterTags from '@/views/Challenges/Dashboard/FilterTags';
import ChallengesRender from '@/views/Challenges/Dashboard/ChallengesRender';
import Footer from '@/views/Challenges/Dashboard/Footer';

export default function Challenges() {
	return (
		<div className="bg-slate-100 dark:bg-slate-950 min-h-screen relative">
			<div className="max-w-5xl mx-auto">
				<Header />
				<FilterTags />
				<ChallengesRender />
				<Footer />
			</div>
		</div>
	);
}
