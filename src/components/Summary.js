import React from 'react';
import './Summary.css';

function Summary() {
  return (
    <section className="summary" id="summary">
      <div className="summary-container">
        <div className="summary-text">
          
          <h2>About Me</h2>
         
          <p>
            Hi, I am Isha Dalvi 3rd Year IT Student and a passionate developer skilled in React, Node.js, SQL, and data visualization tools like Power BI and Tableau. 
            I love building innovative solutions and creating insightful dashboards.
          </p>
          <p>I have a keen interest in data analytics, data visualization, and database management.
             With proficiency in SQL, Python, and tools like Power BI, Tableau, and Excel. I specialized in extracting insights from complex data to drive informed decisions. 
             </p>
             <p>In addition to my technical expertise, I have gained valuable industry exposure through internships,I developed skills in web development and Java-based app development. I also have experience creating interactive visualizations and dashboards for various business cases, such as sales and campaign analysis. With a strong foundation in teamwork, problem-solving, and communication,
             I am excited to contribute to the field of data analytics and business intelligence.</p>
        </div>
        <div className="summary-image">
          <img src="./imgmine.png" alt="Profile" />
          
        </div>
        
      </div>
     
    </section>
  );
}

export default Summary;
