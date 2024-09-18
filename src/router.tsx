import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import IndexPage from "./pages/IndexPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} index />
        <Route element={<Layout />} path="/portfolio"></Route>
      </Routes>
    </BrowserRouter>
  );
}
