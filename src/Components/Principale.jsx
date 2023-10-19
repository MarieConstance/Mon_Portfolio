import React from "react";
import Sidbar from "./Sidbar";
import HeroAbout from "./heroAbout";
import FactSection from "./SkillsSection";
import ResumeSection from "./resume";

function Principale() {
  return (
    <>
      <div className="cadre-sidebar">{<Sidbar />}</div>
      <div className="contenu">
        {<HeroAbout />}
        {<FactSection />}
        {<ResumeSection/>}
      </div>
    </>
  );
}
export default Principale;
