import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'SQL', icon: '🛢️' },
    { name: 'Power BI', icon: '📊' },
    { name: 'Tableau', icon: '📈' },
    { name: 'React', icon: '⚛️' },
    { name: 'Excel', icon: '📑' },
  ];

  return (
    <div className="skills-section" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
