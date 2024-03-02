import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="flex justify-between items-start md:items-center px-8 pt-8 flex-wrap md:flex-nowrap gap-5">
      <div>
        <h1 className="text-3xl font-serif mb-3 sm:mb-0 text-center md:text-left">
          Frontend Mentor Challenges
        </h1>
        <p className="opacity-55 max-w-96 text-sm text-center md:text-left">
          These are some of the challenges of the Frontend Mentor page made with
          react
        </p>
      </div>
      <SearchBar />
    </header>
  );
}
