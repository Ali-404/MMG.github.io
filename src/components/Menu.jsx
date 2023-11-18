
import '../styles/products.css'
import {useEffect, useState} from 'react'
import { FaShare, FaDownload} from "react-icons/fa6";
import client, { urlFor } from '../sanity.js';

export default function Menu() {
    const [mods, setMods] = useState([])
    useEffect(() => {
        
        const data = client.fetch(`*`)
        data.then(res => {
          setMods(res)
        })
        .catch(err => {console.error(err)})
    }, [])
   
  return (
    <div className='cardsContainer'>
    {mods?.map((mod) => (
      <Card key={mod._id} image={mod.image} title={mod.title} />
    ))}
    <div className='btnsContainer'>
        <button className='moreButton'>Previus</button>
        <span >1/15</span>
        <button className='moreButton'>Next</button>
    </div>
    </div>
  )
}



const Card = ({image, title}) => {

  return (
    <div className='card'>
    {image && (
      <>
        <img className="Picture"  src={urlFor(image).url()} alt='' />
        <div className='interactionBar'>
            <FaDownload className='PressedIcon' />
            <FaShare className='PressedIcon' />
        </div>
      </>
    )}
    </div>
  )
}


