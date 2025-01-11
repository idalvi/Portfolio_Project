const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route to send portfolio data
app.get('/api/portfolio', (req, res) => {
    const portfolioData = {
        name: 'Your Name',
        summary: 'A brief summary about you.',
        photo: 'https://example.com/your-photo.jpg', // Replace with your photo URL
        linkedin: 'https://linkedin.com/in/your-profile',
        github: 'https://github.com/your-username',
        skills: ['JavaScript', 'React', 'Node.js', 'SQL', 'Power BI'],
        projects: [
            {
                title: 'Crop Analysis',
                description: 'Analyzed various crop varieties and identified favorable regions for high yields.',
                tools: ['Python', 'Power BI'],
            },
            {
                title: 'Ola Data Visualization',
                description: 'Visualized operational data to derive insights for decision-making.',
                tools: ['Power BI'],
            },
        ],
    };
    res.json(portfolioData);
});

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Portfolio Backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Here, you can handle the form data, e.g., save it to a database or send an email.
    console.log('Contact form data:', { name, email, message });

    // Send a response back to the client
    res.json({ message: 'Thank you for contacting us!' });
});
