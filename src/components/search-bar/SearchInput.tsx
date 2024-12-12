import Input from "@/components/ui/input";
import { challengesTitles } from "@/constants/challenges";
import { getRandomLabel } from "../../utils/getRandomLabel";
import React, { forwardRef, useEffect, useState } from "react";
import { useChallengesStore } from "@/stores/challengesStore";
import { SearchbarEnums } from "@/enums/search-bar.enums";
import { useSearchParams } from "@/hooks/useSearchParams";

const SearchInput = forwardRef(function (_props, inputRef: React.Ref<HTMLInputElement>) {
	const [label, setLabel] = useState("");
	const { challenges, queryChallenges, setFilteredChallenges, setQueryChallenges } =
		useChallengesStore();
	const { setParams } = useSearchParams();

	useEffect(() => {
		const interval = setInterval(() => {
			setLabel(getRandomLabel(challengesTitles));
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Input
			ref={inputRef}
			type="text"
			name="search"
			id="search"
			className="bg-white dark:bg-slate-600 outline-none transition leading-3 w-60 md:w-auto placeholder:capitalize text-base"
			value={queryChallenges}
			placeholder={label}
			title="Search any challenge from Frontend Mentor page"
			autoComplete="off"
			onChange={({ target: { value } }) => {
				setQueryChallenges(value);
				setParams(
					value
						? new URLSearchParams(SearchbarEnums.queryTitle + "=" + value)
						: new URLSearchParams()
				);
				if (!value || !value.length) {
					setFilteredChallenges(challenges);
					return;
				}
			}}
		/>
	);
});

SearchInput.displayName = "SearchInput";
export default SearchInput;
