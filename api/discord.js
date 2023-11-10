const botToken = 'OTAxMjQxOTQ0NDQ4MDUzMjc5.GFmfNm.kmxWk7X4t0V1PHigk5nu4OiqkQGMAzmPCohTXc'; 
const channelId = '887736758056402984'; // Replace with your actual channel ID

// api/discord.js
const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.get(`https://discord.com/api/v10/channels/${channelId}/messages`, {
      headers: {
        Authorization: botToken,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
