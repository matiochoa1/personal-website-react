import AnimationLayout from "./AnimationLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
	return (
		<>
			<Header />

			<main className="container mx-auto">
				<AnimationLayout />
			</main>

			<Footer />
		</>
	);
}
