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


