import {
	DialogPanel,
	DialogTitle,
	TransitionChild,
	Transition,
	Dialog,
} from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useAppStore } from "../stores/useAppStore";

export default function Modal() {
	const [content, setContent] = useState({ languages: [] });
	const modal = useAppStore((state) => state.modal);
	const closeModal = useAppStore((state) => state.closeModal);

	useEffect(() => {
		fetch("/content/content.json")
			.then((response) => response.json())
			.then((data) => setContent(data));
	}, []);

	return (
		<>
			<Transition appear show={modal} as={Fragment}>
				<Dialog as="div" className="relative z-50" onClose={closeModal}>
					<TransitionChild
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black bg-opacity-70" />
					</TransitionChild>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex items-center justify-center min-h-full p-4 text-center">
							<TransitionChild
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95">
								<DialogPanel className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform rounded-lg shadow-xl bg-gradient-to-r from-slate-700 to-slate-900 sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
									<DialogTitle
										as="h3"
										className="my-5 text-4xl font-extrabold text-center text-white">
										More about me...
									</DialogTitle>
									<DialogTitle
										as="div"
										className="flex flex-col gap-2 my-5 lg:flex-row">
										<div className="flex flex-col w-full gap-2 ">
											<div className="flex flex-col w-full p-4 rounded-lg opacity-75 bg-slate-900">
												<h3 className="text-xl font-bold text-center text-orange-400">
													Languages
												</h3>

												{content.languages.map((languages) => (
													<p className="text-lg text-white">{languages}</p>
												))}
											</div>

											<div className="flex flex-col w-full p-4 rounded-lg opacity-75 bg-slate-900">
												<h3 className="text-xl font-bold text-center text-red-700">
													Programming Skills
												</h3>
												<p className="text-lg text-white">HTML</p>
												<p className="text-lg text-white">CSS</p>
												<p className="text-lg text-white">Javascript</p>
												<p className="text-lg text-white">Sass</p>
												<p className="text-lg text-white">Tailwind CSS</p>
												<p className="text-lg text-white">React</p>{" "}
												{/* Incluir un dropdown para mostrar las skills por lenguaje */}
												<p className="text-lg text-white">NodeJS</p>
												<p className="text-lg text-white">Express</p>
												<p className="text-lg text-white">MongoDB</p>
												<p className="text-lg text-white">MySQL</p>
												<p className="text-lg text-white">Python</p>
												<p className="text-lg text-white">Git</p>
												<p className="text-lg text-white">Docker</p>
											</div>
										</div>

										<div className="flex flex-col w-full gap-2 ">
											<div className="flex flex-col w-full p-4 rounded-lg opacity-75 bg-slate-900">
												<h3 className="text-xl font-bold text-center text-teal-400">
													Soft Skills
												</h3>
												<p className="text-lg text-white">Quick Learner</p>
												<p className="text-lg text-white">Team Player</p>
												<p className="text-lg text-white">Problem Solver</p>
												<p className="text-lg text-white">Proactivity</p>
												<p className="text-lg text-white">
													Analytical Thinking
												</p>
												<p className="text-lg text-white">Communication</p>
												<p className="text-lg text-white">Adaptability</p>
												<p className="text-lg text-white">Creativity</p>
												<p className="text-lg text-white">
													Attention to Detail
												</p>
												<p className="text-lg text-white">
													Incident Management
												</p>
											</div>

											<div className="flex-col w-full p-4 rounded-lg opacity-75 bg-slate-900">
												<h3 className="text-xl font-bold text-center text-red-400">
													Education
												</h3>
												<p className="text-lg text-white">
													Business Administration - UES21
												</p>
												<p className="text-lg text-white">
													FP Superior - DAM - Medac
												</p>
												<p className="text-lg text-white">
													Desarrollo Full Stack - Udemy
												</p>
												<p className="text-lg text-white">
													React & Typescript - Udemy
												</p>
											</div>
										</div>
									</DialogTitle>

									<div className="flex justify-between gap-4 mt-5">
										<button
											type="button"
											className="inline-flex items-center justify-center w-full h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
											onClick={closeModal}>
											Close
										</button>
									</div>
								</DialogPanel>
							</TransitionChild>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
