import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/products.css';
import { FaHeart, FaShare, FaDownload } from 'react-icons/fa6';

export default function Menu() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const botToken = 'OTAxMjQxOTQ0NDQ4MDUzMjc5.GUjxlM.a5k_Zr-lf6rjfyS2HK-f-wYk50kL_zK5KbgeYw'; 
    const channelId = '887736758056402984'; // Replace with your actual channel ID

    axios
      .get(`https://discord.com/api/v10/channels/${channelId}/messages`, {
        headers: {
          Authorization: `Bot ${botToken}`,
        },
      })
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const elements = messages.map((message) => <Card key={message.id} message={message} />);

  return (
    <div className='cardsContainer'>
      {elements}
      <div className='btnsContainer'>
        <button className='moreButton'>Previus</button>
        <span>1/{messages.length}</span>
        <button className='moreButton'>Next</button>
      </div>
    </div>
  );
}

const Card = ({ message }) => {
  const imageUrl = message.attachments && message.attachments.length > 0 ? message.attachments[0].url : '';

  return (
    <div className='card'>
      <img className='Picture' src={imageUrl} alt='Card' />
      <div className='interactionBar'>
        <FaHeart className='PressedIcon' />
        <FaDownload className='PressedIcon' />
        <FaShare className='PressedIcon' />
      </div>
    </div>
  );
};
