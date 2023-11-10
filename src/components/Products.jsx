
import '../styles/products.css'
import Menu from './Menu'

export default function Products() {


  const all = ["tt","dafljhadf"]

  return (
    <div className='products container'>
      <div className='newModSection'>
        <div id='left'>
          <h3>New Mods</h3>
          <img src='images/noimg.jpg' alt='' loading='lazy'/>
          <h4>Here the title of the new one</h4>
        </div>

        <div id='right'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      
      </div>

      {/* random Mods 15/0 */}

      {/* load 15 */}
      <Menu />

    </div>
  )
}
