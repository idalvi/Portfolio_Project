import React from 'react';
import './ProjectPage.css';

function BlinkitSales() {
  return (
    <div className="project-page">
      <h1>Blinkit Sales Analysis Project</h1>
      <h3>Using Excel</h3>
      
      <div className="media-section">
        <img src="/blinkit.JPG" alt="Blinkit Sales Analysis" className="project-image" />
        <video controls className="project-video">
          <source src="/blinkit.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="text">
      <h1 className="heading"><b>Project Overview</b></h1>
        <p> <b>This project involved creating a detailed sales analysis dashboard for Blinkit, focusing on various aspects of sales data. The dashboard was built using Microsoft Excel, employing multiple data visualization techniques to provide insights into sales performance, outlet characteristics, and product categories.</b></p>

        <p><b>1. Key Features:</b></p>
        <div className="feature-section">
          <p><b><u>Total Sales Overview</u>:</b> The dashboard displays the total sales amount prominently, giving a quick snapshot of the overall sales performance.</p>
          <p><b><u>Average Sales and Rating</u>:</b> It includes average sales per transaction and the average customer rating, providing insights into customer satisfaction and transaction value.</p>
          <p><b><u>Number of Items Sold</u>:</b> A counter shows the total number of items sold, highlighting the volume of sales.</p>
        </div>

        <p><b>2. Graphs and Charts Used:</b></p>
        <div className="graph-section">
          <p><b>i. Pie Charts:</b></p>
          <p><b><u>Fat Content Distribution</u>:</b> Shows the proportion of low-fat versus regular products sold.</p>
          <p><b><u>Outlet Size Sales Distribution</u>:</b> Illustrates the sales contribution from outlets of different sizes (High, Medium, Small).</p>
          
          <p><b>ii. Bar Charts:</b></p>
          <p><b><u>Item Type Sales</u>:</b> Displays sales revenue from various item categories, such as fruits and vegetables, snack foods, household items, etc.</p>
          <p><b><u>Fat Content by Outlet</u>: </b>Breaks down sales of low-fat and regular items by outlet tiers.</p>
          <p><b><u>Outlet Location Sales</u>: </b>Shows sales figures based on the location tiers of outlets.</p>
          <p><b><u>Outlet Type Performance</u>:</b> Compares sales, average sales, and the number of items sold across different types of outlets (Supermarket Type 1, 2, 3, and Grocery Stores).</p>
          
          <p><b>iii. Line Chart:</b></p>
          <p><b><u>Outlet Establishment Trends</u>:</b> Depicts the growth in the number of outlets established over the years, indicating expansion trends.</p>
        </div>

        <p><b>3. Data Analysis:</b></p>
        <p>The project uses filters for Outlet Size, Outlet Location, and Item Type to allow dynamic interaction with the data, enabling users to view specific segments. The analysis includes identifying high-performing product categories and locations, understanding customer preferences based on fat content, and assessing the impact of outlet size and type on sales performance.</p>

        <p><b>4. Insights Derived:</b></p>
        <div className="insight-section">
          <p><b><u>High Sales from Specific Categories</u>:</b> Certain product categories like fruits and vegetables and snack foods contribute significantly to the overall sales.</p>
          <p><b><u>Impact of Outlet Size and Location</u>:</b> Sales vary notably with outlet size and location, with higher-tier locations and larger outlets generally contributing more to total sales.</p>
          <p><b><u>Customer Preferences</u>:</b> A significant portion of sales comes from regular fat content products, indicating customer preferences in this aspect.</p>
        </div>

        <p><b>5. Tools and Techniques:</b></p>
        <div className="tools-section">
          <p><b><u>Excel Functions</u>:</b> Used for data aggregation, filtering, and dynamic updates.</p>
          <p><b><u>Data Visualization</u>:</b> Various chart types were used to create an interactive and insightful dashboard.</p>
          <p><b><u>Conditional Formatting</u>:</b> Applied to highlight key figures and trends, such as top-performing categories and outlets.</p>
        </div>
      </div>

      <a href="/" className="back-button">Back to Projects</a>
    </div>
  );
}

export default BlinkitSales;

