import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import IndexPage from "./pages/IndexPage";
import AboutMe from "./pages/AboutMe";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Knowledge from "./pages/Knowledge";
import Contact from "./pages/Contact";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} index />
        <Route element={<Layout />} path="/portfolio">
          <Route path="home" element={<HomePage />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="knowledge" element={<Knowledge />} />
          <Route path="contact" element={<Contact />} />
          <Route path="" element={<Navigate to="home" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
