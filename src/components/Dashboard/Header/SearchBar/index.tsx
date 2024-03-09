import { useCallback, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useChallengesStore } from '../../../../lib/stores/challengesStore';
import { Searchable } from '../../../../lib/enums/Searchable';
import { challengesTitles } from '../../../../constants/challenges';
import { useRandomLabel } from './useRandomLabel';

export default function SearchBar() {
	const { setQueryChallenges, queryChallenges, challenges, setFilteredChallenges } =
		useChallengesStore();
	const [searchParams, setSearchParams] = useSearchParams();
	const label = useRandomLabel(challengesTitles);
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
			<input
				ref={inputRef}
				type="text"
				name="search"
				id="search"
				className="bg-[var(--app-blue)] p-2 rounded-lg outline-none transition border-2 border-transparent hover:border-yellow-50 focus-visible:border-[var(--app-yellow)] leading-3 h-[32px] w-full max-w-60 placeholder:capitalize"
				value={queryChallenges}
				placeholder={label}
				title="Search any challenge from Frontend Mentor page"
				autoComplete="off"
				onChange={({ target: { value } }) => {
					setQueryChallenges(value);
					searchParams.set(Searchable.queryTitle, value);
					setSearchParams(searchParams);
					if (!value || !value.length) {
						setFilteredChallenges(challenges);
						return;
					}
				}}
			/>
			<button
				title="Search by the challenges name"
				className="uppercase bg-[var(--app-yellow)] text-[var(--app-dark-blue)] py-1 px-2 rounded-lg font-medium transition filter hover:brightness-105 active:brightness-95 transform active:scale-95 text-sm h-[32px]"
				type="submit"
				onClick={handleFilterChallenges}
			>
				search
			</button>
		</form>
	);
}
