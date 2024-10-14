import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import cards from "../data";
import { CardType } from "../types";

const HorizontalCarousel = () => {
	return (
		<div className="container mx-auto">
			<HorizontalScrollCarousel />
		</div>
	);
};

const HorizontalScrollCarousel = () => {
	const carouselRef = useRef<HTMLDivElement>(null);
	const controls = useAnimation();

	const [dragConstraint, setDragConstraint] = useState(140);

	useEffect(() => {
		const updateDragConstraint = () => {
			if (window.innerWidth < 768) {
				setDragConstraint(240);
			} else {
				setDragConstraint(140);
			}
		};

		updateDragConstraint();
		window.addEventListener("resize", updateDragConstraint);

		return () => window.removeEventListener("resize", updateDragConstraint);
	}, []);

	return (
		<section className="relative overflow-x-hidden ">
			<motion.div
				ref={carouselRef}
				drag="x"
				dragConstraints={{ right: 0, left: -(cards.length * dragConstraint) }}
				dragElastic={0.1}
				animate={controls}
				className="flex gap-4 cursor-grab w-max">
				{cards.map((card) => (
					<Card card={card} key={card.id} />
				))}
			</motion.div>
		</section>
	);
};

const Card = ({ card }: { card: CardType }) => {
	return (
		<div
			key={card.id}
			className="group relative h-[250px] w-[250px] overflow-hidden bg-neutral-200 rounded-lg shadow-lg shadow-slate-700">
			<div
				style={{
					backgroundImage: `url(${card.url})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
				className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110 hover:rotate-2"></div>
			<div className="absolute inset-0 z-10 grid place-content-end">
				<p className="p-4 text-2xl font-black text-white uppercase rounded-lg bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg">
					{card.title}
				</p>
			</div>
		</div>
	);
};

export default HorizontalCarousel;
