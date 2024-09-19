import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store";

export default function HomePage() {
  const navigate = useNavigate();
  const username = useAppStore((state) => state.username);

  const handleGetStarted = () => {
    navigate("/portfolio/about-me");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-14 h-dvh">
        <h1 className="text-white text-8xl">Welcome {username} !</h1>

        <button
          className="inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </>
  );
}
