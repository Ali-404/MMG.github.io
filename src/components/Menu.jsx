import { useEffect } from 'react';
import axios from 'axios'
import '../styles/products.css'
import { FaHeart, FaShare, FaDownload} from "react-icons/fa6";

export default function Menu() {
    const elements = []
    for (let i = 0; i < 15; i++){
        elements.push(<Card />)
    }
  return (
    <div className='cardsContainer'>
    {elements}
    <div className='btnsContainer'>
        <button className='moreButton'>Previus</button>
        <span >1/15</span>
        <button className='moreButton'>Next</button>
    </div>
    </div>
  )
}




const Card = () => {

    
useEffect(() => {
    
    const botToken = 'OTAxMjQxOTQ0NDQ4MDUzMjc5.GUjxlM.a5k_Zr-lf6rjfyS2HK-f-wYk50kL_zK5KbgeYw';
    const channelId = '893089066596315156';
    
    axios.get(`https://discord.com/api/v10/channels/${channelId}/messages`, {
      headers: {
        Authorization: `Bot ${botToken}`,
      },
    })
      .then(response => {
        const messages = response.data;
        
        // Process messages to extract posts and images
        messages.forEach(message => {
          console.log('Content:', message.content);
          
          // Check for attachments (images)
          if (message.attachments && message.attachments.length > 0) {
            message.attachments.forEach(attachment => {
              console.log('Image URL:', attachment.url);
              // Display or store the image URL as needed
            });
          }
        });
      })
      .catch(error => {
        console.error(error);
      });
},[])


  return (
    <div className='card'>
        <img className="Picture" src="https://img.gta5-mods.com/q75/images/gta-5-pc-mod-ohmymodz-essential-v1-mod-menu-trainer-lua/f0f426-picgta5840x472.png" />
        <div className='interactionBar'>
            <FaHeart className='PressedIcon' />
            <FaDownload className='PressedIcon' />
            <FaShare className='PressedIcon' />
        </div>
    </div>
  )
}


