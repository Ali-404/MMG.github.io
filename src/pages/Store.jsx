
import '../styles/store.css'
import '../styles/section.css'



import Nav from "../components/Nav"
import CategoriesSection from "../components/CategoriesSection"
import Products from '../components/Products'

export default function Store() {
  return (
    <div className="store container">
        <Nav />
        <CategoriesSection noTitle={true} isNav={true} />

        {/* elements */}

        <Products />

    </div>
  )
}
