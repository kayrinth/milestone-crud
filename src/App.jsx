import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/organism/loginForm";
import Products from "./components/organism/cardProduct";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<Products />} />
    </Routes>
  );
}
