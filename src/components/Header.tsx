import { IconBrandLinkedin } from "@tabler/icons-react";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();

	return (
		<>
			<header className="sticky top-0 z-40 flex flex-col justify-between gap-6 px-6 py-4 bg-transparent sm:flex-row sm:gap-0">
				<div className="relative group">
					<div className="absolute inset-0 transition duration-200 rounded-lg opacity-75 bg-gradient-to-r from-red-700 to-purple-900 blur-xl group-hover:opacity-100"></div>
					<div className="relative flex items-center justify-center gap-2 py-4 leading-none divide-x divide-gray-500 rounded-lg cursor-pointer bg-slate-900 px-7">
						<span className="flex items-center space-x-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="text-red-700 size-6">
								<path
									fillRule="evenodd"
									d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z"
									clipRule="evenodd"
								/>
							</svg>
							<span
								className="pr-6 text-xs font-bold text-center text-white sm:text-xl"
								onClick={() => navigate("/portfolio/home")}>
								Matias Ochoa - Portfolio
							</span>
						</span>

						<span className="pl-6">
							<a
								href="https://www.linkedin.com/in/matias-ochoa1/"
								target="_blank"
								rel="noopener noreferrer">
								<IconBrandLinkedin stroke={2} color="white" size={30} />
							</a>
						</span>
					</div>
				</div>

				<Navigation />
			</header>
		</>
	);
}
