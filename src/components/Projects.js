import React from 'react';
import './Projects.css';

function Projects() {
  const topProjects = [
    {
      id: 1,
      name: 'Crop Analysis',
      description: 'Analyzed crop data using Python and Power BI.',
      buttonText: 'View Details',
      link: '/crop-analysis',
    },
    {
      id: 2,
      name: 'Blinkit Sales Analysis',
      description: 'Derived insights from Blinkit\'s sales data.',
      buttonText: 'View Details',
      link: '/blinkit-sales-analysis',
    },
    {
      id: 6,
      name: 'Ola Bookings Analysis',
      description: 'Derived insights from Ola Bookings data.',
      buttonText: 'View Details',
      link: '/ola-project',
    },
    {
      id: 7,
      name: 'Pizza Sales Data Analysis',
      description: 'Derived insights from pizza sales data.',
      buttonText: 'View Details',
      link: '/pizza-sales',
    },
  ];

  const bottomProjects = [
    {
      id: 3,
      name: 'Campaign Analysis',
      description: 'Performed data analysis using complex SQL queries.',
      buttonText: 'View Details',
      link: '/sql-project',
    },
    {
      id: 4,
      name: 'Finance Data Analysis ',
      description: 'Analyzed sales data and created dashboards in Excel.',
      buttonText: 'View Details',
      link: '/excel-project',
    },
    {
      id: 5,
      name: 'Healthcare Analysis',
      description: 'Created interactive visualizations using Tableau.',
      buttonText: 'View Details',
      link: '/tableau-project',
    },
    {
      id: 7,
      name: 'Power Bi Project',
      description: 'Created interactive visualizations using power bi.',
      buttonText: 'View Details',
      link: '/powerbi-project',
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-row">
        {topProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button
              onClick={() => window.location.href = project.link}
              className="project-button"
            >
              {project.buttonText}
            </button>
          </div>
        ))}
      </div>
      <div className="project-row">
        {bottomProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button
              onClick={() => window.location.href = project.link}
              className="project-button"
            >
              {project.buttonText}
            </button>
          </div>
        ))}
      </div>
    
    </section>
  );
}

export default Projects;
