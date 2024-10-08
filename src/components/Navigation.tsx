import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className="relative group">
				<div className="absolute inset-0 transition duration-200 rounded-lg opacity-75 bg-gradient-to-r from-red-700 to-purple-900 blur-xl group-hover:opacity-100"></div>
				<nav className="relative flex flex-col items-center justify-center py-4 leading-none rounded-lg cursor-pointer sm:py-3 sm:flex-row sm:justify-between bg-slate-900 px-7">
					<div className="flex items-center">
						<button
							className="font-bold text-white md:hidden"
							onClick={toggleMenu}>
							{isOpen ? (
								<IconX className="w-6 h-6" stroke={4} />
							) : (
								<IconMenu2
									className="w-6 h-6 p-1 bg-red-700 rounded-md"
									stroke={4}
								/>
							)}
						</button>
						<div className="items-center justify-center hidden gap-4 md:flex">
							<NavLink
								to="/portfolio/about-me"
								className={({ isActive }) =>
									isActive
										? "text-red-700 font-bold transition-colors p-1 text-lg"
										: "text-white font-bold hover:text-red-700 transition-colors p-1 text-lg"
								}>
								About Me
							</NavLink>

							<NavLink
								to="/portfolio/projects"
								className={({ isActive }) =>
									isActive
										? "text-red-700 font-bold transition-colors p-1 text-lg"
										: "text-white font-bold hover:text-red-700 transition-colors p-1 text-lg"
								}>
								Projects
							</NavLink>

							<NavLink
								to="/portfolio/contact"
								className={({ isActive }) =>
									isActive
										? "text-red-700 font-bold transition-colors p-1 text-lg"
										: "text-white font-bold hover:text-red-700 transition-colors p-1 text-lg"
								}>
								Contact
							</NavLink>
						</div>
					</div>
					<div
						className={`overflow-hidden transition-max-height duration-300 ease-linear ${
							isOpen ? "max-h-80" : "max-h-0"
						} md:hidden flex flex-col items-center justify-center gap-2 sm:gap-0 sm:mt-0`}>
						<NavLink
							to="/portfolio/about-me"
							className={({ isActive }) =>
								isActive
									? "text-red-700 font-bold transition-colors p-1 text-lg"
									: "text-white font-bold hover:text-red-700 transition-colors p-1 text-lg"
							}
							onClick={toggleMenu}>
							About Me
						</NavLink>

						<NavLink
							to="/portfolio/projects"
							className={({ isActive }) =>
								isActive
									? "text-red-700 font-bold transition-colors p-1 text-lg"
									: "text-white font-bold hover:text-red-700 transition-colors p-1 text-lg"
							}
							onClick={toggleMenu}>
							Projects
						</NavLink>

						<NavLink
							to="/portfolio/contact"
							className={({ isActive }) =>
								isActive
									? "text-red-700 font-bold transition-colors p-1 text-lg"
									: "text-white font-bold hover:text-red-700 transition-colors p-1 text-lg"
							}
							onClick={toggleMenu}>
							Contact
						</NavLink>
					</div>
				</nav>
			</div>
		</>
	);
}
