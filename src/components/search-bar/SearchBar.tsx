import { useCallback, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import SearchInput from "./SearchInput";
import { IoIosSearch } from "react-icons/io";
import { useChallengesStore } from "@/stores/challengesStore";
import { SearchbarEnums } from "@/enums/search-bar.enums";
import { useSearchParams } from "@/hooks/useSearchParams";

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
			className="flex items-center gap-2 justify-center md:justify-end w-full md:w-auto"
			onSubmit={(submitEvent) => {
				submitEvent.preventDefault();
				handleFilterChallenges();
			}}
		>
			<SearchInput ref={inputRef} />
			<Button
				title="Search by the challenges name"
				className={`text-lg transition dark:bg-white active:scale-95 ${
					!queryChallenges ? "cursor-not-allowed" : ""
				}`}
				type="submit"
				onClick={handleFilterChallenges}
				disabled={!queryChallenges}
			>
				<IoIosSearch />
			</Button>
		</form>
	);
}
