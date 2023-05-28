import React from "react";
import "./experience.css";
import ListExperiences from "./components/listExperiences";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {//<ListExperiences />
}
      <p><ul class="skills">
          <li>Proficient in C++ and C</li>
          <li>Proficient in UI/UX designing</li>
          <li>Creativity and Good Thinker</li>
          <li>Game Developper</li>
        </ul></p>
      </div>
    </section>
  );
};
export default Experience;
