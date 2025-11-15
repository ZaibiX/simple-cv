import React from "react";
import "../styles/Skills.css";

export default function Skills({ skills = [] }) {
  return (
    <div className="section skills-section">
      <h2 className="section-title">Skills</h2>
      <ul className="skills-list">
        {skills.map((s, idx) => (
          <li className="skill-item" key={idx}>
            <span className="skill-name">{s.name}</span>
            <span className="skill-level">{s.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}