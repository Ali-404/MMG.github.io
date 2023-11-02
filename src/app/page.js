import Link from 'next/link'
import './main.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactBook, faMessage, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';



export default function Home() {
  return (
    <div className="container">
      <section className='section'>
        <header >
          <img src="x.png" />
          <ul>
           
            <li>
              <Link href={'#'}>Discord</Link>
              <FontAwesomeIcon icon={faMessage} />
            </li>
           
            <li>
              <Link href={'#'}>Login/Sign up</Link>
              <FontAwesomeIcon icon={faUserCircle} />
            </li>
          
          </ul>
        </header>

          <div className='core'>
            <h1>Download Best MTA Mods</h1>
            <img src='/mtasa.png'/>

          </div>
       

      </section>
    </div>
  )
}
