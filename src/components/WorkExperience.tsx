import { IconBriefcase } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function WorkExperience() {
	const [content, setContent] = useState({
		currentExperience: [],
		previousExperience: [],
		firstExperience: [],
	});

	useEffect(() => {
		fetch("/content/aboutMe.json")
			.then((response) => response.json())
			.then((data) => setContent(data));
	});

	return (
		<>
			<div className="container p-6 mx-auto">
				<section className="flex items-center justify-center gap-4 mt-4 border-b-2 border-white sm:mt-52 border-opacity-70 border-">
					<IconBriefcase stroke={2} color="white" size={50} />
					<h2 className="text-4xl text-white sm:text-6xl">Experience</h2>
				</section>

				<section className="flex flex-col gap-2 mt-10 sm:gap-4 sm:pl-4 sm:border-l-2 sm:border-red-700 sm:border-opacity-80">
					<h2 className="p-2 text-3xl text-center text-white sm:text-start sm:p-0">
						<span>Microsoft</span>: Sr. Technical Support Engineer
					</h2>
					<span className="text-lg font-bold text-center text-red-500 sm:text-start">
						2024 - Now
					</span>

					<div>
						<p className="w-full p-4 font-bold text-center text-white sm:p-0 sm:w-1/2 sm:text-start">
							{content.currentExperience.map((experience, index) => (
								<p
									key={index}
									className={
										index === 0
											? "text-yellow-500 font-bold"
											: index === 1
											? "text-teal-400 font-bold"
											: "text-white font-bold"
									}>
									{experience}
								</p>
							))}
						</p>
					</div>
				</section>

				<section className="flex flex-col gap-2 mt-10 sm:gap-4 sm:pr-4 sm:border-r-2 sm:border-red-700 sm:items-end sm:border-opacity-80">
					<h2 className="p-2 text-3xl text-center text-white sm:text-end sm:p-0">
						<span>Microsoft</span>: Technical Support Engineer
					</h2>
					<span className="text-lg font-bold text-center text-red-500 sm:text-end">
						2022 - 2024
					</span>

					<div className="flex flex-col sm:items-end">
						<p className="w-full p-4 font-bold text-center text-white sm:p-0 sm:text-end">
							{content.previousExperience.map((experience, index) => (
								<p
									key={index}
									className={
										index === 0
											? "text-yellow-500 font-bold"
											: index === 1
											? "text-teal-400 font-bold"
											: "text-white font-bold"
									}>
									{experience}
								</p>
							))}
						</p>
					</div>
				</section>

				<section className="flex flex-col gap-2 mt-10 sm:gap-4 sm:pl-4 sm:border-l-2 sm:border-red-700 sm:border-opacity-80">
					<h2 className="p-2 text-3xl text-center text-white sm:p-0 sm:text-start">
						<span>Xandr</span>: Sr Analyst - Product Support
					</h2>
					<span className="text-lg font-bold text-center text-red-500 sm:text-start">
						2021 - 2022
					</span>

					<div>
						<p className="w-full p-4 font-bold text-center text-white sm:text-start sm:p-0 sm:w-1/2">
							{content.firstExperience.map((experience, index) => (
								<p
									key={index}
									className={
										index === 0
											? "text-yellow-500 font-bold"
											: index === 1
											? "text-teal-400 font-bold"
											: "text-white font-bold"
									}>
									{experience}
								</p>
							))}
						</p>
					</div>
				</section>
			</div>
		</>
	);
}
