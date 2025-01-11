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

function OlaProject() {
  const images = [
    { src: '/olaone.JPG', alt: 'Ola Analysis 1' },
    { src: '/olatwo.JPG', alt: 'Ola Analysis 2' },
    { src: '/olathree.JPG', alt: 'Ola Analysis 3' },
    { src: '/olafour.JPG', alt: 'Ola Analysis 4' },
    { src: '/olafive.JPG', alt: 'Ola Analysis 5' },
  ];

  return (
    <div className="project-page">
      <h1>Ola Bookings Analysis project</h1>
      <h3>Using Power Bi and SQL</h3>
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

        <p><b>1. Overall Dashboard</b></p>
        <div className="feature-section">
          <p><b><u>1. Total Bookings:    </u>:</b>Displays the total number of bookings made within the selected date range.       </p>
          <p><b><u>2. Total Bookings Value:      </u>:</b>Shows the total monetary value of bookings in millions.      </p>
          <p><b><u>3. Booking Status Breakdown:      </u>:</b>A pie chart categorizes the bookings into different statuses such as Success, Canceled by Driver, Canceled by Customer, and Driver Not Found.     </p>
          <p><b><u>4. Ride Volume Over Time:       </u>:</b> A line chart showing the number of rides over time, indicating fluctuations in booking volume across different dates.   </p>
        </div>
        

      <p><b>2. Revenue and Ride Distance</b></p>
        <div className="graph-section">
          <p><b><u>1. Revenue by Payment Method: </u></b> A bar chart that breaks down revenue based on different payment methods such as cash, UPI, credit card, and debit card.</p>
          <p><b><u>2. Top 5 Customers by Total Booking Value:        </u>:</b> A table listing the top customers based on their booking values.      </p>
          <p><b><u>3. Ride Distance Distribution Per Day:        </u>:</b>  A bar chart showing the distribution of ride distances over the selected date range.   </p>
         
         
          
        </div>

        <p><b>3. Ride Cancellations</b></p>
        <p><b><u>1. Date Range Selector:    </u>:</b>  Allows filtering of data within a specific date range.</p>
          <p><b><u>2. Total Bookings:       </u>: </b>Displays the total number of bookings.</p>
          <p><b><u>3. Succeeded Bookings:     </u>: </b> Shows the number of successful bookings.   </p>
          <p><b><u>4. Cancelled Bookings:     </u>:</b>Indicates the number of bookings that were canceled.       </p>
          <p><b><u>5. Cancellation Rate:</u>:</b>Presents the percentage of bookings that were canceled.</p>

          <p><b>Pie Charts:</b></p>
          <p><b><u>a). Canceled Rides By Customer:    </u>:</b>Displays the reasons for cancellations from the customer's perspective, such as the driver not moving towards the pick-up location or incorrect addresses. </p>
          <p><b><u>b). Canceled Rides By Driver:      </u>: </b>Shows reasons for cancellations from the driver's perspective, including customer-related issues and exceeding the permitted passenger limit.</p>
      

         
  


           
        <p><b>4.Ratings Dashboard</b></p>
        <div className="insight-section">
          <p><b><u>1. Driver Rating:</u>:</b>Displays average ratings given to drivers across different vehicle types like Prime Sedan, Prime SUV, Mini, Auto, Bike, and E-Bike.Shows ratings for different categories, likely on a scale of 5. </p>
          <p><b><u>2. Customer Rating:</u>:</b>Similar to the driver rating but from the customer's perspective.Lists average customer ratings for each vehicle type.</p>
          <p><b><u>3. Date Range Filter:</u>:</b>Allows users to filter the displayed data based on a selected date range. </p>
        </div>
     



        
        <div className="tools-section">
          <p><b>These dashboards offer a quick overview of operational metrics such as driver and customer satisfaction, booking success rates, and booking trends over time, which can be critical for decision-making and improving service quality.</b></p>
         
        </div>
      </div>






      <a href="/" className="back-button">Back to Projects</a>
    </div>
  );
}

export default OlaProject;

