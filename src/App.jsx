import "./App.css";
import HomeContainer from "./container/homecontainer";

import { Route, Routes } from "react-router-dom";
import About from "./about/index";
import NavBar from "./navebar/index";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
