
import '../styles/products.css'
import {useEffect, useState} from 'react'
import { FaShare, FaDownload} from "react-icons/fa6";
import client, { urlFor } from '../sanity.js';

export default function Menu({filterType}) {
    const [mods, setMods] = useState([])
    useEffect(() => {
        
        const data = client.fetch(`*`)
        data.then(res => {
          if (!filterType){
            setMods(res)
            
          }else{
            setMods(res.filter(mod => mod.type === filterType))
          }
        })
        .catch(err => {console.error(err)})
    },[filterType])


 
   
  return (
    <div className='cardsContainer'>
    {mods?.map((mod) => (
      <Card key={mod._id} image={mod.image} title={mod.title}  />
    ))}
    <div className='btnsContainer'>
        <a  href='/Store'  className='moreButton'  >Home</a>
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


