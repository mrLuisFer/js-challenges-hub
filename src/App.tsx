import ChallengesRender from './components/Dashboard/ChallengesRender';
import FilterTags from './components/Dashboard/FilterTags';
import Footer from './components/Dashboard/Footer';
import Header from './components/Dashboard/Header';

export default function App() {
	return (
		<div className="bg-slate-100 min-h-screen relative">
			<div className="max-w-5xl mx-auto">
				<Header />
				<FilterTags />
				<ChallengesRender />
				<Footer />
			</div>
		</div>
	);
}
