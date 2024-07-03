// import React from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// 
import "./index.css";
import App_Body from "./components/App_Body";
import Gallery from "./Pages/Gallery";
import Projects from "./Pages/Projects";
import Certification from "./Pages/Certification";
import ContactPage from "./Pages/ContactPage";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App_Body />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificate" element={<Certification />} />
          <Route path="/contactPage" element={<ContactPage />} />
          {/* <Route path="/" element={<Login />} /> */}
        </Routes>
      </Router> 

      {/* BOdy */}
      {/* <App_Body /> */}
    </>
  );
};

export default App;

// h1 className="text-[50px] font-[200] mb-[10px] text-[#BDBDBD] "
