import AnimationLayout from "./AnimationLayout";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Layout() {
  return (
    <>
      <Header />

      <main>
        <AnimationLayout />
      </main>

      <Modal />
    </>
  );
}
