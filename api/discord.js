const botToken = 'OTAxMjQxOTQ0NDQ4MDUzMjc5.GUjxlM.a5k_Zr-lf6rjfyS2HK-f-wYk50kL_zK5KbgeYw'; 
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
