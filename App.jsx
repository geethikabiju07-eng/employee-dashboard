
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EmployeeForm from "./pages/EmployeeForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/employee-dashboard">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
