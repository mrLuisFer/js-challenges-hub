import { useLocation } from "react-router-dom";
import BackToDashboardBtn from "../BackToDashboardBtn";

export default function Header() {
  const location = useLocation();
  const title = location.pathname.replace("/", "").split("-").join(" ");

  return (
    <header className="flex py-2 px-8 justify-between items-center">
      <BackToDashboardBtn />
      <div>
        <div className="flex items-center gap-2">
          <span>Challenge:</span>
          <h1 className="font-bold text-xl capitalize font-serif">{title}</h1>
        </div>
      </div>
    </header>
  );
}
