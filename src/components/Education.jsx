import React from "react";
import "../styles/Education.css";

export default function Education({ education = [] }) {
  return (
    <div className="section education-section">
      <h2 className="section-title">Education</h2>
      {education.map((edu, idx) => (
        <div className="education-item" key={idx}>
          <div className="edu-dates">{edu.startDate} — {edu.endDate}</div>
          <div className="edu-main">
            <div className="edu-degree">{edu.degree} in {edu.field}</div>
            <div className="edu-institution">{edu.institutionName}</div>
            {edu.description && <div className="edu-desc">{edu.description}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}