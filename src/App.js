import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import LogIn from "./Pages/Login/LogIn";
import NavMenu from "./Pages/NavMenu/NavMenu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./SignUp/SignUp";

function App() {
  return (
    <div className="max-w-screen-2xl px-6 mx-auto App">
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
