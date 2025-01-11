import React from 'react';
import './ProjectPage.css';

function CropAnalysis() {
  return (
    <div className="project-page">
      <h1>Crop Analysis Project</h1>
      <div className="media-section">
        <div className="image-container">
          <img src="" alt="Crop Analysis" className="project-image" />
        </div>
        <video controls className="project-video">
          <source src="crop-analysis-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p>
        This project involved analyzing patients to identify reasons for admit in certain conditions and to determine optimal locations for higher production. The analysis was done using Python and Power BI for insightful visualizations.
      </p>
      <a href="/" className="back-button">Back to Projects</a>
    </div>
  );
}

export default CropAnalysis;
