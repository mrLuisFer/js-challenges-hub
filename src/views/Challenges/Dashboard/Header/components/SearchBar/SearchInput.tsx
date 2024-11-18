import { Input } from '@/components/ui/input.tsx';
import { challengesTitles } from '@/constants/challenges.ts';
import { useSearchParams } from 'react-router-dom';
import { useRandomLabel } from './useRandomLabel.ts';
import React, { forwardRef, useEffect, useState } from 'react';
import { useChallengesStore } from '@/lib/stores/challengesStore.ts';
import { Searchable } from '@/lib/enums/Searchable.ts';

const SearchInput = forwardRef(function (_props, inputRef: React.Ref<HTMLInputElement>) {
	const [label, setLabel] = useState('');
	const { challenges, queryChallenges, setFilteredChallenges, setQueryChallenges } =
		useChallengesStore();
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const interval = setInterval(() => {
			setLabel(useRandomLabel(challengesTitles));
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Input
			ref={inputRef}
			type="text"
			name="search"
			id="search"
			className="bg-white dark:bg-slate-600 outline-none transition leading-3 w-60 placeholder:capitalize text-base"
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
	);
});

SearchInput.displayName = 'SearchInput';
export default SearchInput;
