import { Link } from "react-router-dom";
import { Level } from "../../../constants/challenges";

export type Challenge = {
  title: string;
  description: string;
  image?: string;
  level: Level;
  tags: string[];
  route?: string;
};
export default function ChallengeCard({
  challengeInfo: challenge,
  index,
}: {
  challengeInfo: Challenge;
  index: number;
}) {
  return (
    <Link to={challenge.route ?? ""} key={index}>
      <article
        key={index}
        className="bg-[var(--app-blue)] max-w-80 rounded-xl transition border-2 border-transparent hover:border-[var(--app-yellow)]"
      >
        <img
          src={challenge.image}
          alt={challenge.title}
          aria-description={challenge.description}
          aria-label={challenge.title}
          className="rounded-t-xl w-full object-cover"
          loading="lazy"
          draggable="false"
        />
        <div className="p-4 flex flex-col gap-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-2xl font-serif">{challenge.title}</h2>
            <span className="text-xs p-1 bg-[var(--app-dark-blue)] rounded-lg uppercase hover:bg-[var(--app-yellow)] hover:text-[var(--app-dark-blue)] transition">
              {challenge.level}
            </span>
          </div>
          <p className="opacity-55 text-sm">{challenge.description}</p>
          <div className="flex gap-4 mt-4">
            {challenge.tags.map((tag, index) => (
              <span
                key={index}
                className="py-1 px-2 rounded-lg font-semibold text-sm bg-[var(--app-yellow)] text-[var(--app-dark-blue)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
