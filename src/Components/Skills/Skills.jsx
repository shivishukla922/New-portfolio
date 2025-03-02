import React from "react";
import "./Skills.css";
import {
  FaJs,
  FaJava,
  FaHtml5,
  FaCss3,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiVercel } from "react-icons/si";

const skillsData = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Java", icon: <FaJava /> },
      { name: "CSS", icon: <FaCss3 /> },
      { name: "HTML", icon: <FaHtml5 /> },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [{ name: "GitHub", icon: <FaGithub /> }],
  },
];

const Skills = () => {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="skills-heading">
          <h1>Skills and Education</h1>
        </div>

        <div className="skills-education">
          <div id="about" className="skills-container">
            <div className="skills-sections">
              {skillsData.map((section, index) => (
                <div className="skills-column" key={index}>
                  <div className="skill-dot"></div>
                  <div className="skill-title">
                    <div className="skill-slider"></div>
                    <h2>{section.category}</h2>
                  </div>
                  <div className="skills-icons">
                    {section.items.map((item, idx) => (
                      <div className="icon-item" key={idx}>
                        <span className="skill-icon">{item.icon}</span>
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education">
            <h2 className="col-name">IMS Engineering College</h2>
            <p className="deg-name">
              Bachelor of Technology in Computer Science Engineering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
