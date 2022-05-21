import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import NavMenu from "./Pages/NavMenu/NavMenu";

function App() {
  return (
    <div className="max-w-screen-2xl px-6 mx-auto">
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
