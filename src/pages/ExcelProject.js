import React from 'react';
import ImageSlider from '../components/ImageSlider';  // Import the ImageSlider component
import './ProjectPage1.css';

function ExcelProject() {
  const images = [
    { src: '/finanace_one.JPG', alt: 'Ola Analysis 1' },
    { src: '/finanace_two.JPG', alt: 'Ola Analysis 2' },
   
  ];

  return (
    <div className="project-page">
      <h1>Bank Finance Data Analysis project</h1>
      <h3>Using Excel and SQL</h3>
      <div className="media-section">
        <ImageSlider images={images} />  {/* Use the ImageSlider component */}
        <video controls className="project-video">
          <source src="/ola.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>



      <div className="text">
      <h1 className="heading"><b>Project Overview</b></h1>
        <p> <b>The dashboard provides insights into loan applications, funding, repayment, interest rates, and borrower details. Here’s a breakdown of its key features:      </b></p>
       
        <p><b>1. Summary Dashboard</b></p>
        <div className="feature-section">
        <p><b>Total Loan Applications: 38.6K (with Month-to-Date (MTD) and Month-over-Month (MOM) growth rates)</b></p>
        <p><b>Total Funded Amount: $435,757.1M</b></p>
        <p><b>Total Amount Received: $473,070.9M</b></p>
        <p><b>Avg Interest Rate: 12.05%</b></p>
        <p><b>Avg Debt-to-Income (DTI) Ratio: 13.33%</b></p>
        <p><b>Loan Quality Analysis:</b></p>
        <p><b>Good Loans: 86.18% (33.2K applications, $370,224.9M funded, $435,786.2M received)</b></p>
        <p><b>Bad Loans: 13.82% (5.3K applications, $65,532.2M funded, $37,284.8M received)</b></p>
        <p><b>Loan Status Breakdown:</b></p>
        <p><b>Fully Paid: 32,145.0K</b></p>
        <p><b>Charged Off: 5,333.0K</b></p>
        <p><b>Current: 1,098.0K</b></p>
        </div>
        

      <p><b>2. Overview Dashboard</b></p>
        <div className="graph-section">
        <p><b>Loan Applications by Month: Shows a steady increase throughout the year.</b></p>
 <p><b>Applications by State: Geographic distribution of loan applications.</b></p>
 <p><b>Applications by Employee Length: Insights into borrower employment duration.</b></p>
<p><b>Applications by Purpose: Categorized by debt consolidation, credit card, home improvement, small business, etc.</b></p>
<p><b>Applications by Term: Comparison between 36-month and 60-month loan terms.</b></p>
<p><b>Applications by Home Ownership: Distribution across rented, owned, and mortgaged homes.</b></p>
         
         
          
        </div>

       



       
      

         
  


           
        <p><b> Insights & Use Cases</b></p>
        <div className="insight-section">
          <p><b>Identifies good vs. bad loans for risk management.</b></p>
          <p><b>Provides insights into borrower demographics and behavior.</b></p>
          <p><b> Aids in decision-making for lending policies.</b> </p>
        </div>
     



        
        <div className="tools-section">
          <p><b>These dashboards offer a quick overview of operational metrics such as driver and customer satisfaction, booking success rates, and booking trends over time, which can be critical for decision-making and improving service quality.</b></p>
         
        </div>
      </div>






      <a href="/" className="back-button">Back to Projects</a>
    </div>
  );
}

export default ExcelProject;

