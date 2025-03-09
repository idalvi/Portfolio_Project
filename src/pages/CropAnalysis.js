/*import React from 'react';
import './ProjectPage.css';

function OlaProject() {
  return (
    <div className="project-page">
      <h1>Ola Bookings Analysis project</h1>
      <h3>Using Power Bi and SQL</h3>
      <div className="media-section">
        <div className="image-gallery">
          <img src="/olaone.JPG" alt="Blinkit Sales Analysis 1" className="project-image" />
          <img src="/olatwo.JPG" alt="Blinkit Sales Analysis 2" className="project-image" />
          <img src="/olathree.JPG" alt="Blinkit Sales Analysis 3" className="project-image" />
          <img src="/olafour.JPG" alt="Blinkit Sales Analysis 3" className="project-image" />
          <img src="/olafive.JPG" alt="Blinkit Sales Analysis 3" className="project-image" />
        </div>
        <video controls className="project-video">
          <source src="/ola.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p>
        This project analyzed Blinkit's sales data to derive insights into trends and performance metrics, enabling better decision-making for operational improvements.
      </p>
      <a href="/" className="back-button">Back to Projects</a>
    </div>
  );
}

export default OlaProject;*/


// src/pages/OlaProject.js
import React from 'react';
import ImageSlider from '../components/ImageSlider';  // Import the ImageSlider component
import './ProjectPage1.css';

function CropAnalysis() {
  const images = [
    { src: '/cropone.JPG', alt: 'Ola Analysis 1' },
    { src: '/croptwo.JPG', alt: 'Ola Analysis 2' },
    { src: '/cropthree.JPG', alt: 'Ola Analysis 3' },
    { src: '/cropfour.JPG', alt: 'Ola Analysis 4' },
    
  ];

  return (
    <div className="project-page">
      <h1>Crop Analysis project</h1>
      <h3>Using Power Bi</h3>
      <div className="media-section">
        <ImageSlider images={images} />  {/* Use the ImageSlider component */}
        <video controls className="project-video">
          <source src="/ola.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>



      <div className="text">
      <h1 className="heading"><b>Project Overview</b></h1>
        <p> <b>The provided images show dashboards from your Ola Project where I have utilized SQL and Power BI to analyze and visualize data related to ride cancellations, revenue, and booking details. Here's an overview of the dashboards,these dashboards display various insights about Ola's operations:        </b></p>
        

 
 

        <p><b>1. First Image:</b></p>
        <div className="feature-section">
          <p><b><u>1. Count of Production by State    </u>:</b> A pie chart showing the distribution of crop production across various states, with Uttar Pradesh, Madhya Pradesh, and Karnataka among the leading states.      </p>
          <p><b><u>2. Average of Production by Season      </u>:</b>A line chart indicating that the highest average production happens across the whole year, while seasonal production (Winter, Kharif, Rabi, Autumn, Summer) is significantly lower.      </p>
          <p><b><u>3. Max of Production by Crop Year     </u>:</b>A donut chart displaying the maximum crop production by year, highlighting specific years with peak production.    </p>
          <p><b><u>4. Max of Production by District      </u>:</b> A bar chart where Malappuram, Kozhikode, and other districts have the highest production levels.  </p>
        </div>
        
        

 

      <p><b>2. Second Image:</b></p>
        <div className="graph-section">
          <p><b><u>1. Max of Production by Crop </u></b>  A bar chart indicating that Coconut and Sugarcane have the highest production compared to other crops.</p>
          <p><b><u>2. Count of Crop by Season        </u>:</b> A line chart showing how the number of crops varies by season, with Kharif having the highest count and Autumn the lowest.     </p>
          <p><b><u>3. Sum of Production and Count of Crop by District and Crop Year       </u>:</b>   A stacked bar chart and line chart visualizing crop production trends over time across different districts.   </p>
        </div>
       
 
 

        <p><b>3.  Third Image:</b></p>
        <p><b><u>1. Count of Crop by District and Season</u>:</b>  A stacked bar chart visualizing seasonal variations in crop count by district.</p>
          <p><b><u>2. Count of Crop and Count of Production by State</u>: </b>A bar chart comparing the number of crops and production count across different states, showing Uttar Pradesh and Madhya Pradesh leading.</p>
        

        

         
         

           
        <p><b>Key Takeaways:</b></p>
        <div className="insight-section">
         
        <p><b>Uttar Pradesh, Madhya Pradesh, and Karnataka are top-producing states.</b></p>
        <p><b>Coconut and Sugarcane are the most produced crops.</b></p>
        <p><b>Kharif season has the highest crop count, while Autumn has the lowest.</b></p>
<p><b>Certain districts like Malappuram and Kozhikode have exceptionally high production.</b></p>
<p><b>Production varies significantly by year, with some years seeing a peak.</b></p>

        </div>
     



        
        <div className="tools-section">
          <p><b>These dashboards provide a comprehensive view of crop production trends across different states, seasons, and years.</b></p>
         
        </div>
      </div>






      <a href="/" className="back-button">Back to Projects</a>
    </div>
  );
}

export default CropAnalysis;

