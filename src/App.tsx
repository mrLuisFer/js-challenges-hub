import { Link } from "react-router-dom";

type Level = "junior" | "intermediate" | "advanced";
type Challenge = {
  title: string;
  description: string;
  image?: string;
  level: Level;
  tags: string[];
  route?: string;
};

const challenges: Challenge[] = [
  {
    title: "Age Calculator",
    description:
      "This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!",
    tags: ["HTML", "CSS", "JS"],
    level: "junior",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/jmzygkuazktqtg2akkkx.jpg",
    route: "/age-calculator",
  },
  {
    title: "Interactive Comments Section",
    description:
      "This is project will put your JavaScript skills to the test. We provide a JSON file to pull the data, but it's also a perfect project to build as a full-stack CRUD app!",
    tags: ["HTML", "CSS", "JS"],
    level: "intermediate",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/v9wskl4mnbt5gbxm4o2r.jpg",
    route: "/interactive-comments",
  },
];

export default function App() {
  return (
    <div className="bg-[var(--app-dark-blue)] min-h-screen text-white">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-start px-8 pt-8">
          <div>
            <h1 className="text-3xl font-serif">Frontend Mentor Challenges</h1>
            <p className="opacity-55 max-w-96 text-sm">
              These are some of the challenges of the Frontend Mentor page made
              with react
            </p>
          </div>
          <div className="flex items-center gap-4 justify-end">
            <input
              type="text"
              name="search"
              id="search"
              className="bg-[var(--app-blue)] p-2 rounded-lg outline-none transition border-2 border-transparent focus-visible:border-[var(--app-yellow)] leading-3 h-[32px]"
            />
            <button
              title="Search by the challenges name"
              className="uppercase bg-[var(--app-yellow)] text-[var(--app-dark-blue)] py-1 px-2 rounded-lg font-medium transition filter hover:brightness-105 active:brightness-95 transform active:scale-95 text-sm h-[32px]"
            >
              search
            </button>
          </div>
        </header>
        <section className="px-8 pt-12 flex flex-wrap gap-8">
          {challenges.map((challenge, index) => (
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
          ))}
        </section>
      </div>
    </div>
  );
}
