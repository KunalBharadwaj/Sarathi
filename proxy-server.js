
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for your front-end
app.use(cors({
  origin: 'http://localhost:5173', // Update with your Vite dev server URL
  methods: ['GET']
}));

// Proxy endpoint for LocationIQ
app.get('/api/location-search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q || q.length < 3) {
      return res.json([]);
    }
    
    const apiKey = process.env.LOCATIONIQ_API_KEY;
    const response = await axios.get(
      `https://api.locationiq.com/v1/autocomplete.php`, {
        params: {
          key: apiKey,
          q,
          limit: 5,
          countrycodes: 'in',
          format: 'json'
        }
      }
    );
    
    res.json(response.data);
  } catch (error) {
    console.error('Error proxying LocationIQ request:', error.message);
    if (error.response) {
      return res.status(error.response.status).json({
        error: 'Location search failed',
        details: error.response.data
      });
    }
    res.status(500).json({ error: 'Location search failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});