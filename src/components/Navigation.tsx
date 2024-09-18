export default function Navigation() {
	return (
		<>
			<div className="relative group">
				<div className="absolute inset-0 transition duration-200 rounded-lg opacity-75 bg-gradient-to-r from-red-700 to-purple-900 blur-xl group-hover:opacity-100"></div>
				<nav className="relative flex items-center justify-center gap-4 py-4 leading-none  rounded-lg cursor-pointer bg-slate-900 px-7">
					<a
						href=""
						className="text-white font-bold hover:text-red-700 transition-colors p-1 text-lg">
						About me
					</a>
					<a
						href=""
						className="text-white font-bold hover:text-red-700 transition-colors p-1 text-lg">
						Projects
					</a>
					<a
						href=""
						className="text-white font-bold hover:text-red-700 transition-colors p-1 text-lg">
						Skills
					</a>
					<a
						href=""
						className="text-white font-bold hover:text-red-700 transition-colors p-1 text-lg">
						Contact
					</a>
				</nav>
			</div>
		</>
	);
}
