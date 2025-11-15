import React from "react";
import "../styles/Experience.css";

export default function Experience({ experience = [] }) {
  return (
    <div className="section experience-section">
      <h2 className="section-title">Experience</h2>
      {experience.map((exp, idx) => (
        <div className="experience-item" key={idx}>
          <div className="exp-dates">{exp.startDate} — {exp.endDate}</div>
          <div className="exp-main">
            <div className="exp-role">{exp.role} — <span className="exp-company">{exp.company}</span></div>
            {exp.description && <div className="exp-desc">{exp.description}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}