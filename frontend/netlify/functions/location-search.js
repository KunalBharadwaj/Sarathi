
const axios = require('axios');

exports.handler = async (event) => {
  try {
    const { q } = event.queryStringParameters;
    if (!q || q.length < 3) {
      return { statusCode: 200, body: JSON.stringify([]) };
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

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error('LocationIQ API error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch location data' }),
    };
  }
};