import React from 'react';
import './ProjectPage.css';

function TableauProject() {
  return (
    <div className="project-page">
      <h1>Healthcare Data Analysis Project</h1>
      <h3>Using Tableau</h3>
      <div className="media-section">
        <img src="/healthcare.JPG" alt="Blinkit Sales Analysis" className="project-image" />
        <video controls className="project-video">
          <source src="healthvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>



      <div className="text">
      <h1 className="heading"><b>Project Overview</b></h1>
        <p> <b>This dashboard provides a comprehensive analysis of hospital data, focusing on various metrics related to patient care, hospital operations, and financial performance.</b></p>

        <p><b>Key Components:</b></p>
        <div className="feature-section">
          <p><b><u>Bed Occupancy:</u>:</b> Displays the number of occupied beds across different categories: Private, General, and ICU.</p>
          <p><b><u>Feedback for Doctor:</u>:</b> A donut chart showing feedback ratings for various doctors. Each segment represents a doctor with corresponding feedback scores.</p>
          <p><b><u>Billing Amount:</u>:</b>Shows the total billing amount, providing an overview of the hospital's revenue.</p>
          <p><b><u>Follow-Up Date, Discharge Date, and Admit Date:</u>:</b>Displays key dates for patient care, including follow-up, discharge, and admission dates.</p>
          <p><b><u>Diagnosis:</u>:</b>A funnel chart representing the percentage distribution of various diagnoses such as Viral Infection, Flu, Malaria, Typhoid, Pneumonia, and Fracture.</p>
          <p><b><u>Health Insurance and Billing Amount:</u>:</b>A line chart comparing the sum of health insurance amounts, billing amounts, and amounts paid by patients across different diagnoses.</p>
          <p><b><u>Test:</u>:</b>A bar chart showing the count of patients undergoing various tests like Blood Test, MRI, CT Scan, Ultrasound, and X-Ray.</p>
          <p><b><u>Range Filters:</u>:</b>Shows the total billing amount, providing an overview of the hospital's revenue.</p>
        </div>

       
        <p><b>Insights Derived:</b></p>
        <div className="insight-section">
          <p><b><u>Bed Usage</u>:</b> The occupancy rates in Private, General, and ICU categories help understand resource utilization.</p>
          <p><b><u>Doctor Feedback</u>:</b> Provides insights into patient satisfaction with different doctors.</p>
          <p><b><u>Financial Overview</u>:</b> The total billing amount gives a snapshot of the hospital's financial health.</p>
          <p><b><u>Patient Care</u>:</b>The timelines for follow-up, discharge, and admission dates help in tracking patient care processes.</p>
          <p><b><u>Disease Distribution</u>:</b> The diagnosis funnel chart highlights the prevalence of various medical conditions.</p>
          <p><b><u> Financial Breakdown</u>:</b>The line chart offers a detailed view of financial transactions related to health insurance, billing, and patient payments.</p>
          <p><b><u>Test Utilization</u>:</b>Date range selectors for filtering data based on admission dates, enhancing the interactivity of the dashboard.</p>
        </div>
         
        <p><b>Tools and Techniques:</b></p>
        <div className="tools-section">
          <p><b><u>SQL Functions</u>:</b> Used for data aggregation, filtering, and dynamic updates,CASE Statements,Views.</p>
          <p><b><u>Data Visualization</u>:</b> Various chart types were used to create an interactive and insightful dashboard.</p>
          <p><b><u>Conditional Formatting</u>:</b> Applied to highlight key figures and trends, such as top-performing categories and outlets.</p>
        </div>
        <p><b>This dashboard is an essential tool for hospital administrators to monitor and improve hospital operations, patient care, and financial performance. Let me know if you'd like more specific details or further analysis.</b></p>
      </div>





      <a href="/" className="back-button">Back to Projects</a>
    </div>
  );
}

export default TableauProject;

























