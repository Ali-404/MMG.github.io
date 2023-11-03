import '../styles/section.css'
import '../styles/categoriesSection.css'

import { FaCar, FaCode, FaPerson,FaGun,FaMap,FaToolbox } from "react-icons/fa6";

export default function HomeSection() {
  return (
    <section className='categoriesSection' >
      <div className='content'>
       <h1>Categories</h1>
       <ul>
        <li> 
          <FaCode className='icon' />
          <span>Scripts</span>
        </li>
        <li> 
          <FaCar className='icon' />
          <span>Vehicles</span>
        </li>
        <li> 
          <FaPerson className='icon' />
          <span>Skins</span>
        </li>
        <li> 
          <FaGun className='icon' />
          <span>Weapons</span>
        </li>
        <li> 
          <FaMap className='icon' />
          <span>Maps</span>
        </li>
        <li> 
          <FaToolbox className='icon' />
          <span>Tools</span>
        </li>
       </ul>
      </div>
    </section>
  )
}
