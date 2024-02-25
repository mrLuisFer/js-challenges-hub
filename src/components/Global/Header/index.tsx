import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()

  return (
    <header className="flex py-4 px-8">
      <button className="bg-[var(--app-yellow)] transition p-2 rounded-lg transform active:scale-95 capitalize filter hover:brightness-95" onClick={() => {
        navigate('/')
      }}>
        Back to all challenges
      </button>
    </header>
  );
}
