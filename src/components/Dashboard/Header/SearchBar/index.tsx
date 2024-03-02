import { useCallback, useEffect } from "react";
import { useChallengesStore } from "../../../../lib/stores/challengesStore";
import { useSearchParams } from "react-router-dom";

enum Searchable {
  queryTitle = "search",
}

export default function SearchBar() {
  const {
    setQueryChallenges,
    challengesQuery,
    challenges,
    setFilteredChallenges,
  } = useChallengesStore();
  const [searchParams, setSearchParams] = useSearchParams();

  const filterByTitle = useCallback(() => {
    return challenges.filter((challenge) => {
      return challenge.title.toLowerCase().includes(challengesQuery);
    });
  }, [challenges, challengesQuery]);

  const handleFilterChallenges = () => {
    const query = searchParams.get(Searchable.queryTitle);
    if (!query) {
      setFilteredChallenges(challenges);
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
    challengesQuery,
    filterByTitle,
    searchParams,
    setFilteredChallenges,
    setQueryChallenges,
  ]);

  return (
    <form
      className="flex items-center gap-4 justify-center md:justify-end w-full md:w-auto"
      onSubmit={(submitEvent) => {
        submitEvent.preventDefault();
        handleFilterChallenges();
      }}
    >
      <input
        type="text"
        name="search"
        id="search"
        className="bg-[var(--app-blue)] p-2 rounded-lg outline-none transition border-2 border-transparent focus-visible:border-[var(--app-yellow)] leading-3 h-[32px] w-full max-w-60"
        value={challengesQuery}
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
