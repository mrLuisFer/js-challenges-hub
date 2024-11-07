import { useCallback, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useChallengesStore } from '../../../../../lib/stores/challengesStore.ts';
import { Searchable } from '../../../../../lib/enums/Searchable.ts';
import { Button } from '@/components/ui/button.tsx';
import SearchInput from './SearchInput.tsx';

export default function SearchBar() {
	const { setQueryChallenges, queryChallenges, challenges, setFilteredChallenges } =
		useChallengesStore();
	const [searchParams] = useSearchParams();
	const inputRef = useRef<HTMLInputElement | null>(null);

	const filterByTitle = useCallback(() => {
		return challenges.filter((challenge) => {
			return challenge.title.toLowerCase().includes(queryChallenges);
		});
	}, [challenges, queryChallenges]);

	const handleFilterChallenges = () => {
		const query = searchParams.get(Searchable.queryTitle);
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
		const query = searchParams.get(Searchable.queryTitle);
		if (!query) return;
		setQueryChallenges(query);
		const filteredChallenges = filterByTitle();
		setFilteredChallenges(filteredChallenges);
	}, [
		challenges,
		queryChallenges,
		filterByTitle,
		searchParams,
		setFilteredChallenges,
		setQueryChallenges,
	]);

	return (
		<form
			className="flex items-center gap-2 justify-center md:justify-end w-full md:w-auto"
			onSubmit={(submitEvent) => {
				submitEvent.preventDefault();
				handleFilterChallenges();
			}}
		>
			<SearchInput ref={inputRef} />
			<Button
				title="Search by the challenges name"
				className="uppercase font-medium"
				type="submit"
				onClick={handleFilterChallenges}
			>
				search
			</Button>
		</form>
	);
}
