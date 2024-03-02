import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../constants/routes";
export default function BackToDashboardBtn() {
  const navigate = useNavigate();

  return (
    <button
      className="flex items-center bg-[var(--app-yellow)] transition p-2 rounded-lg transform active:scale-95 capitalize filter hover:brightness-95 text-sm"
      onClick={() => {
        navigate(Routes.root);
      }}
    >
      <IoIosArrowBack />
      Back to Dashboard
    </button>
  );
}
