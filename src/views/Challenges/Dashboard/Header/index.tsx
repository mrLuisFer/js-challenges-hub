import HeaderDarkModeButton from '../../../../components/DarkModeButton';
import SearchBar from './components/SearchBar';

export default function Header() {
	return (
		<header className="flex justify-between items-start md:items-center lg:items-start px-8 pt-8 flex-wrap md:flex-nowrap gap-5">
			<section className="lg:flex lg:flex-col lg:gap-3">
				<h1 className="text-3xl lg:text-4xl font-semibold font-serif lg:leading-none mb-3 sm:mb-0 text-center md:text-left">
					Frontend Mentor Challenges
				</h1>
				<p className="opacity-55 lg:opacity-40 max-w-96 text-sm text-center md:text-left">
					These are some of the challenges of the Frontend Mentor page made with react and
					experimental tools!!
				</p>
			</section>
			<div className="flex flex-col gap-3">
				<SearchBar />
				<HeaderDarkModeButton />
			</div>
		</header>
	);
}
