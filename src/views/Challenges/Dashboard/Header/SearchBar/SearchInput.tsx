import { Input } from '@/components/ui/input.tsx';
import { challengesTitles } from '@/constants/challenges.ts';
import { useSearchParams } from 'react-router-dom';
import { useRandomLabel } from './useRandomLabel.ts';
import { forwardRef, useEffect, useState } from 'react';
import { useChallengesStore } from '@/lib/stores/challengesStore.ts';
import { Searchable } from '@/lib/enums/Searchable.ts';

const SearchInput = forwardRef(function ({}, inputRef: React.Ref<HTMLInputElement>) {
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
			className="bg-white outline-none transition focus-visible:border-orange-600 leading-3 h-[32px] w-60 placeholder:capitalize text-md"
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

export default SearchInput;
