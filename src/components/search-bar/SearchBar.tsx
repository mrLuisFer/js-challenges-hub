import { useCallback, useEffect, useRef } from 'react';
import { useChallengesStore } from '@/stores/challengesStore';
import { SearchbarEnums } from '@/enums/search-bar.enums';
import { useSearchParams } from '@/hooks/useSearchParams';
import Input from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Search } from 'lucide-react';


export default function SearchBar() {
	const { setQueryChallenges, queryChallenges, challenges, setFilteredChallenges } =
		useChallengesStore();
	const { params } = useSearchParams();
	const inputRef = useRef<HTMLInputElement | null>(null);

	const filterByTitle = useCallback(() => {
		return challenges.filter((challenge) => {
			return challenge.title.toLowerCase().includes(queryChallenges);
		});
	}, [challenges, queryChallenges]);

	const handleFilterChallenges = () => {
		const query = params.get(SearchbarEnums.queryTitle);
		if (!query || queryChallenges) {
			setFilteredChallenges(challenges);
			inputRef.current?.focus();
			return;
		}
		setQueryChallenges(query);
		const filteredChallenges = filterByTitle();
		setFilteredChallenges(filteredChallenges);
	};

	useEffect(() => {
		const query = params.get(SearchbarEnums.queryTitle);
		if (!query) return;
		setQueryChallenges(query);
		const filteredChallenges = filterByTitle();
		setFilteredChallenges(filteredChallenges);
	}, [
		challenges,
		queryChallenges,
		filterByTitle,
		params,
		setFilteredChallenges,
		setQueryChallenges,
	]);

	return (
		<form
			className="flex items-start gap-2 justify-center md:justify-end w-full md:w-auto lg:w-96 flex-col"
			onSubmit={(submitEvent) => {
				submitEvent.preventDefault();
				handleFilterChallenges();
			}}
		>
			<Label htmlFor='input-26'>Search any challenge:</Label>
			<div className="relative w-full">
				<Input id="input-26" className="peer pe-9 ps-9" placeholder="Search..." type="search" />
				<div
					className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
					<Search size={16} strokeWidth={2} />
				</div>
				<button
					className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
					aria-label="Submit search"
					type="submit"
					disabled={true}
				>
					<ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
				</button>
			</div>

		</form>
	);
}
