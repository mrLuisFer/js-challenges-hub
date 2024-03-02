import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="flex justify-between items-start px-8 pt-8">
      <div>
        <h1 className="text-3xl font-serif">Frontend Mentor Challenges</h1>
        <p className="opacity-55 max-w-96 text-sm">
          These are some of the challenges of the Frontend Mentor page made with
          react
        </p>
      </div>
      <SearchBar />
    </header>
  );
}
