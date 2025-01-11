import React from 'react';
import ImageSlider from '../components/ImageSlider';  // Import the ImageSlider component
import './ProjectPage1.css';

function SQLProject() {
  const images = [
    { src: '/comone.JPG', alt: 'Ola Analysis 1' },
    { src: '/comtwo.JPG', alt: 'Ola Analysis 2' },
    { src: '/comthree.JPG', alt: 'Ola Analysis 3' },
  ];

  return (
    <div className="project-page">
      <h1>Ola Bookings Analysis Project</h1>
      <h3>Using Power BI and SQL</h3>
      <div className="media-section">
        <ImageSlider images={images} />  {/* Use the ImageSlider component */}
        <video controls className="project-video">
          <source src="/ola.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="text">
        <h1 className="heading"><b>Project Overview</b></h1>
        <p><b>The provided dashboards created using Power BI are designed for campaign analysis to recommend the discontinuation of underperforming campaigns. Here's an overview of the insights and visualizations included:</b></p>

        <p><b>Dashboard 1:</b></p>
        <div className="feature-section">
          <p><b><u>1. Campaign Name, Audience, Amount Spent, Geography, Age:</u></b> These are high-level summary cards that provide key details about the campaign such as the name, target audience, total amount spent, geographic focus, and the age group of the audience.</p>
          <p><b><u>2. Sum of Reach by Campaign ID:</u></b> This bar chart shows the reach of different campaigns, indicating how many people were exposed to each campaign.</p>
          <p><b><u>3. Sum of Impressions by Geography:</u></b> This chart breaks down the number of impressions received by each campaign across different geographical locations.</p>
          <p><b><u>4. Sum of Cost Per Click (CPC), Cost Per Result (CPR), and Click-Through Rate (CTR) by Clicks:</u></b> This line chart visualizes the relationship between the cost metrics and click-through rates over time or across different campaigns.</p>
        </div>

        <p><b>Dashboard 2:</b></p>
        <div className="graph-section">
          <p><b>1. Sum of Unique Clicks, Link Clicks, and Unique Click-Through Rate (CTR) by Age and Campaign ID:</b> These grouped bar charts analyze the unique clicks, link clicks, and CTR across various age groups for each campaign ID.</p>
          <p><b><u>2. Sum of Cost Metrics by Campaign ID:</u></b> This bar chart illustrates the cost per click, cost per result, and click-through rate for each campaign ID.</p>
          <p><b><u>3. Sum of Clicks by Campaign ID:</u></b> This bar chart shows the total number of clicks each campaign received.</p>

          <p><b>Dashboard 3:</b></p>
          <p><b><u>1. Count of Unique Click-Through Rate (CTR), Unique Clicks, and Link Clicks:</u></b> A pie chart representing the distribution of CTR, unique clicks, and link clicks across the campaigns.</p>
          <p><b><u>2. Count of Frequency by Campaign ID:</u></b> A bar chart showing how frequently each campaign ID appeared or was interacted with.</p>
          <p><b><u>3. Sum of Reach, Impressions, and Amount Spent by Geography:</u></b> A combined bar and line chart showing the relationship between reach, impressions, and the amount spent in various geographical locations.</p>

          <p><b>Insights for Campaign Discontinuation:</b></p>
          <div className="insight-section">
            <p><b><u>1. Low Reach and Impressions:</u></b> Campaigns with significantly lower reach and impressions compared to others might be less effective and candidates for discontinuation.</p>
            <p><b><u>2. High Cost Per Click and Low CTR:</u></b> Campaigns that have a high cost per click and a low click-through rate indicate inefficient spending, which may warrant discontinuation.</p>
            <p><b><u>3. Geographical Underperformance:</u></b> If certain campaigns perform poorly in specific regions, reallocating resources to better-performing regions could improve overall efficiency.</p>
            <p><b><u>4. Age Group Analysis:</u></b> Campaigns targeting age groups with low engagement might need to be re-evaluated or discontinued.</p>
          </div>

          <div className="tools-section">
            <p><b>These dashboards provide a comprehensive view of campaign performance, allowing for data-driven decisions regarding which campaigns to discontinue based on their effectiveness and efficiency.</b></p>
          </div>
        </div>
      </div>

      <a href="/" className="back-button">Back to Projects</a>
    </div>
  );
}

export default SQLProject;
