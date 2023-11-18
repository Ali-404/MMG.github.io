
import '../styles/products.css'
import Menu from './Menu'

export default function Products() {



  return (
    <div className='products container'>
      <div className='newModSection'>
        <div id='left'>
          <h3>New Mods</h3>
          <img src='images/noimg.jpg' alt='' loading='lazy'/>
          <h4>Here the title of the new one</h4>
        </div>

      
      </div>

      {/* random Mods 15/0 */}

      {/* load 15 */}
      <Menu />

    </div>
  )
}
