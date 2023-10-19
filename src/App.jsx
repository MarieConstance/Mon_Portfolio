import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidbar from "./Components/Sidbar";
import Principale from "./Components/Principale";
import HeroAbout from "./Components/heroAbout";
import SkillsSection from "./Components/SkillsSection";
import ResumeSection from "./Components/resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principale />} />
          <Route path="/Sidbar" element={<Sidbar />} />
          <Route path="/HeroAbout" element={<HeroAbout />} />
          <Route path="/SkillsSection" element={<SkillsSection />} />
          <Route path="/ResumeSection" element={<ResumeSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
