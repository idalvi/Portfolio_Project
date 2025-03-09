import React from 'react';
import './ProjectPage.css';

function PizzaSales() {
  return (
    <div className="project-page">
      <h1>Pizza Sales Analysis Project</h1>
      <h3>Using Excel</h3>
      
      <div className="media-section">
        <img src="/pizza.JPG" alt="Blinkit Sales Analysis" className="project-image" />
        <video controls className="project-video">
          <source src="/blinkit.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      

 


      <div className="text">
      <h1 className="heading"><b>Project Overview</b></h1>
        <p> <b>This is a Pizza Sales Dashboard, built using Power BI to analyze sales trends, order patterns, and best/worst-selling pizzas. Here's a breakdown of the insights from the dashboard:</b></p>

        <p><b>1. Key Metrics:</b></p>
        <div className="feature-section">
          <p><b><u> Total Revenue</u>:</b>$8,17,860</p>
          <p><b><u>Avg Order Value</u>:</b>  $38.31</p>
          <p><b><u>Total Pizzas Sold</u>:</b>49,574</p>
          <p><b><u>Total Orders</u>:</b>21,350</p>
          <p><b><u>Avg Pizzas Per Order</u>:</b> 2.32</p>
        </div>

        <p><b>2.Peak Sales Insights:</b></p>
        <div className="graph-section">
          <p><b><u>Busiest Days</u>:</b>Friday and Saturday (highest orders on weekends).</p>
          <p><b><u>Busiest Hours</u>:</b>Maximum orders occur from 12-1 PM and between 4-8 PM.</p>
        

          <p><b>Sales Breakdown</b></p>
          <p><b>By Category:Classic pizzas contribute the most to total sales.Below shown - Total Pizza Sold by Category:</b></p>
          <p><b><u>Classic</u>:</b>14,888</p>
          <p><b><u>Supreme</u>: </b> 11,987</p>
          <p><b><u>Veggie</u>: </b>11,649</p>
          <p><b><u>Chicken</u>:</b> 11,050</p>
          






X-Large & XX-Large have minimal sales.
          <p><b>By Size:Large pizzas generate the most revenue.Below shown % of Sales by Size:</b></p>
          <p><b><u>Large</u>:</b> 45.89%</p>
          <p><b><u>Medium</u>:</b> 30.49%</p>
          <p><b><u>Regular</u>:</b>  21.77%</p>
        </div>
       



        <p><b>Best & Worst Sellers</b></p>
        <p><b> Top 5 Best-Selling Pizzas:</b></p>
        <p>The Classic Deluxe Pizza (2,453 sold).</p>
<p>The Barbecue Chicken Pizza (2,432 sold).</p>
<p>The Hawaiian Pizza (2,422 sold).</p>
<p>The Pepperoni Pizza (2,418 sold).</p>
<p>The Thai Chicken Pizza (2,371 sold).</p>









        <p><b> Bottom 5 Worst-Selling Pizzas:</b></p>
        <p>The Soppressata Pizza (961 sold).</p>
<p>The Spinach Supreme Pizza (950 sold).</p>
<p>The Calabrese Pizza (937 sold).</p>
<p>The Mediterranean Pizza (934 sold).</p>
<p>The Brie Carre Pizza (490 sold, lowest sales).</p>

        <p><b>4. Trends & Patterns</b></p>
        <div className="insight-section">
          <p><b><u>Daily Trends</u>:</b>Sales remain stable throughout the week, with Friday having the highest orders.</p>
          <p><b><u>Hourly Trends</u>:</b>Peak orders between 12 PM - 1 PM and 4 PM - 8 PM.</p>
       
        </div>

        <p><b>5. Tools and Techniques:</b></p>
        <div className="tools-section">
          <p><b><u>Excel Functions</u>:</b> Used for data aggregation, filtering, and dynamic updates.</p>
          <p><b><u>Data Visualization</u>:</b> Various chart types were used to create an interactive and insightful dashboard.</p>
          <p><b><u>Conditional Formatting</u>:</b> Applied to highlight key figures and trends, such as top-performing categories and outlets.</p>
        </div>
      </div>
      <p>This dashboard provides actionable insights for optimizing sales, improving inventory management, and focusing on high-demand products.</p>

      <a href="/" className="back-button">Back to Projects</a>
    </div>
  );
}

export default PizzaSales;