import Header from "./components/Header";
import ChallengeCard from "./components/ChallengeCard";
import { useChallengesStore } from "./lib/stores/challengesStore";

export default function App() {
  const { challenges, challengesQuery } = useChallengesStore();
  const filteredChallenges = challenges.filter((challenge) => {
    return challenge.title.toLowerCase().includes(challengesQuery);
  });

  return (
    <div className="bg-[var(--app-dark-blue)] min-h-screen text-white">
      <div className="max-w-5xl mx-auto">
        <Header />
        <section className="px-8 pt-12 flex flex-wrap gap-8">
          {challenges.length ? (
            filteredChallenges.map((challenge, index) => (
              <ChallengeCard
                key={index}
                challengeInfo={challenge}
                index={index}
              />
            ))
          ) : (
            <div className="flex items-center justify-center h-full w-full mt-20">
              <h2 className="text-2xl font-bold animate-pulse">
                Challenges not found!
              </h2>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
