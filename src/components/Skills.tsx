import { IconCodeCircle } from "@tabler/icons-react";
import HorizontalCarousel from "./HorizontalCarousel";

export default function Skills() {
	return (
		<>
			<div className="container p-6 mx-auto">
				<section className="flex items-center justify-center gap-4 mt-10 border-b-2 border-white border-opacity-70">
					<IconCodeCircle stroke={2} color="white" size={50} />
					<h2 className="text-4xl text-white sm:text-6xl">Skills</h2>
				</section>

				<section className="mt-10">
					<HorizontalCarousel />
				</section>
			</div>
		</>
	);
}
