export default function Projects() {
	return (
		<>
			<section>
				<h2 className="mt-10 text-4xl font-bold text-center text-white">
					discover some of my projects...{" "}
				</h2>

				<div className="grid grid-cols-1 gap-6 p-4 mt-10 justify-items-center lg:grid-cols-3">
					<div className="max-w-sm overflow-hidden rounded-lg shadow-lg shadow-red-700">
						<a
							href="https://drinks-recipe-searcher-m.netlify.app/"
							target="_blank">
							<img
								className="w-full transition-transform cursor-pointer hover:scale-105 hover:rotate-2"
								src="/project-cocktail-receipe.png"
								alt="Drinks Searcher Project"
							/>
						</a>
						<div className="px-6 py-4">
							<div className="mb-2 text-xl font-bold text-white">
								Drink Recipe Searcher
							</div>
							<p className="text-base text-gray-700">
								Drink Recipes Recommendations App is a web application that
								allows users to search for drink recipes based on the
								ingredients they look for. The app uses a RESTful API to fetch
								drink recipes and provides a user-friendly interface for
								searching and filtering recipes as well as adding them to
								favorites.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 ">
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#React
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#TailwindCSS
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#TypeScript
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#Zustand
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#RESTfulAPI
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#ReactRouterDOM
							</span>
						</div>
					</div>
					{/* End of first project */}

					<div className="max-w-sm overflow-hidden rounded-lg shadow-lg shadow-red-700">
						<a href="https://crypto-react-ts-mat.netlify.app/" target="_blank">
							<img
								className="w-full transition-transform hover:scale-105 hover:rotate-2"
								src="/project-crypto-searcher.png"
								alt="Crypto Currency Tracker Project"
							/>
						</a>
						<div className="px-6 py-4">
							<div className="mb-2 text-xl font-bold text-white">
								Crypto Currency Tracker
							</div>
							<p className="text-base text-gray-700">
								Crypto Currency Tracker is a web application that allows users
								to track the prices of various cryptocurrencies in real-time. It
								provides a user-friendly interface to view the current prices,
								historical data, and market trends of different cryptocurrencies
							</p>
						</div>
						<div className="px-6 pt-4 pb-2">
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#React
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#TailwindCSS
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#TypeScript
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#Zustand
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#RESTfulAPI
							</span>
						</div>
					</div>
					{/* End of second project */}

					<div className="max-w-sm overflow-hidden rounded-lg shadow-lg shadow-red-700">
						<a
							href="https://app-clima-react-api-m.netlify.app/"
							target="_blank">
							<img
								className="w-full transition-transform hover:scale-105 hover:rotate-2"
								src="/weather-app.png"
								alt="Weather App Project"
							/>
						</a>
						<div className="px-6 py-4">
							<div className="mb-2 text-xl font-bold text-white">
								Weather App
							</div>
							<p className="text-base text-gray-700">
								Weather App is a web application that provides real-time weather
								data for any location in the world. It uses a RESTful API to
								fetch weather data and provides a user-friendly interface for
								searching and viewing weather information.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2">
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#React
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#TailwindCSS
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#TypeScript
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#Zustand
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#RESTfulAPI
							</span>
						</div>
					</div>
					{/* End of third project */}

					<div className="max-w-sm overflow-hidden rounded-lg shadow-lg shadow-red-700">
						<a
							href="https://vet-patienttracker-zustand.netlify.app/"
							target="_blank">
							<img
								className="w-full transition-transform hover:scale-105 hover:rotate-2"
								src="/patient-tracker.png"
								alt="Vet Patient Tracker Project"
							/>
						</a>
						<div className="px-6 py-4">
							<div className="mb-2 text-xl font-bold text-white">
								Vet Patient Tracker
							</div>
							<p className="text-base text-gray-700">
								Vet Patient Tracker is a web application that allows to submit a
								form with information about the patient and the owner. It
								provides a user-friendly interface to view the submitted
								information and allows to edit or delete the information.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2">
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#React
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#TailwindCSS
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#TypeScript
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#Zustand
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#ReactHookForm
							</span>
						</div>
					</div>
					{/* End of fourth project */}

					<div className="max-w-sm overflow-hidden rounded-lg shadow-lg shadow-red-700">
						<a href="https://control-gastos-mat.netlify.app/" target="_blank">
							<img
								className="w-full transition-transform hover:scale-105 hover:rotate-2"
								src="/expenses-app.png"
								alt="Expenses App"
							/>
						</a>
						<div className="px-6 py-4">
							<div className="mb-2 text-xl font-bold text-white">
								Expenses App
							</div>
							<p className="text-base text-gray-700">
								Expenses App is a web application that allows to submit a form
								and keep track of expenses. You can submit your budget and see
								how much you have spent according to certain categories.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2">
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#React
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#TailwindCSS
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#TypeScript
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#ContextAPI
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#useReducer
							</span>
						</div>
					</div>
					{/* End of fifth project */}

					<div className="max-w-sm overflow-hidden rounded-lg shadow-lg shadow-red-700">
						<a href="https://calorie-tracker-tsm8.netlify.app/" target="_blank">
							<img
								className="w-full transition-transform hover:scale-105 hover:rotate-2"
								src="/calorie-tracker.png"
								alt="Calorie Tracker App"
							/>
						</a>
						<div className="px-6 py-4">
							<div className="mb-2 text-xl font-bold text-white">
								Calorie Tracker
							</div>
							<p className="text-base text-gray-700">
								Expenses App is a web application that allows to submit a form
								and keep track of expenses. You can submit your budget and see
								how much you have spent according to certain categories.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2">
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#React
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#TailwindCSS
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#TypeScript
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#ContextAPI
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#useReducer
							</span>
						</div>
					</div>
					{/* End of sixth project */}

					<div className="max-w-sm overflow-hidden rounded-lg shadow-lg shadow-red-700">
						<a href="https://guitarla-ts-mati.netlify.app/" target="_blank">
							<img
								className="w-full transition-transform hover:scale-105 hover:rotate-2"
								src="/guitar-shop.png"
								alt="Guitar Shop"
							/>
						</a>
						<div className="px-6 py-4">
							<div className="mb-2 text-xl font-bold text-white">
								Guitar Shop
							</div>
							<p className="text-base text-gray-700">
								Guitar Shop is a web application that simulates a ecommerce
								site. With the use of useState and other hooks you can add items
								to the cart and it'll calculate costs.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2">
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#React
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#TailwindCSS
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#TypeScript
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#useState
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#CustomHooks
							</span>
						</div>
					</div>
					{/* End of seventh project */}

					<div className="max-w-sm overflow-hidden rounded-lg shadow-lg shadow-red-700">
						<a
							href="https://matiochoa1.github.io/Drum-Kit/index-START.html"
							target="_blank">
							<img
								className="w-full transition-transform hover:scale-105 hover:rotate-2"
								src="/drumkit.png"
								alt="Drum Kit App"
							/>
						</a>
						<div className="px-6 py-4">
							<div className="mb-2 text-xl font-bold text-white">Drum Kit</div>
							<p className="text-base text-gray-700">
								DrumKit is a web application app built with Vanilla JS, CSS and
								HTML. You can play around with your keyboard to play some good
								sounds.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2">
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#HTML
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#CSS
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#JavaScript
							</span>
						</div>
					</div>
					{/* End of eighth project */}

					<div className="max-w-sm overflow-hidden rounded-lg shadow-lg shadow-red-700">
						<a href="https://matiochoa1.github.io/Turnero/" target="_blank">
							<img
								className="w-full transition-transform hover:scale-105 hover:rotate-2"
								src="/barber-app.png"
								alt="Barber Appointment App"
							/>
						</a>
						<div className="px-6 py-4">
							<div className="mb-2 text-xl font-bold text-white">
								Barber Appointment App
							</div>
							<p className="text-base text-gray-700">
								The Barber Appointment App is a web application that simulates a
								site where users can take an appointment with their barber. It
								has been built with HTML, CSS and Vanilla JS.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2">
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#HTML
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#CSS
							</span>
							<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
								#JavaScript
							</span>
						</div>
					</div>
					{/* End of eighth project */}
				</div>
			</section>
		</>
	);
}
