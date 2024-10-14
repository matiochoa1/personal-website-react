import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
	return (
		<>
			<section className="p-8 mt-12 shadow-lg bg-slate-900 shadow-gray-300">
				<div className="flex flex-col items-center gap-6 lg:justify-around lg:flex-row">
					<div className="flex flex-col justify-center gap-2">
						<div className="flex gap-2 ">
							<a href="https://github.com/matiochoa1" target="_blank">
								<IconBrandGithub stroke={2} color="white" size={36} />
							</a>

							<a
								href="https://www.linkedin.com/in/matias-ochoa1/"
								target="_blank">
								<IconBrandLinkedin stroke={2} size={36} color="white" />
							</a>
						</div>
					</div>

					<div className="flex flex-col justify-center">
						<p className="text-lg font-bold text-center text-white">
							Professional Portfolio - Matias Ochoa. All rights reserved &copy;{" "}
							{new Date().getFullYear()}
						</p>
					</div>

					<div className="flex flex-col gap-2">
						<NavLink
							to="/portfolio/about-me"
							className="text-xl font-bold text-center text-white transition-colors lg:text-end hover:text-red-700">
							About Me
						</NavLink>
						<NavLink
							to="/portfolio/projects"
							className="text-xl font-bold text-center text-white transition-colors lg:text-end hover:text-red-700">
							Projects
						</NavLink>
						<NavLink
							to="/portfolio/contact"
							className="text-xl font-bold text-center text-white transition-colors lg:text-end hover:text-red-700">
							Contact
						</NavLink>
					</div>
				</div>
			</section>
		</>
	);
}
