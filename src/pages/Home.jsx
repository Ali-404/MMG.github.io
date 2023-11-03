
import HomeSection from "../components/HomeSection";
import CategoriesSection from "../components/CategoriesSection";

import '../styles/main.css'
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="MAIN">
        <HomeSection />
        <CategoriesSection />
        <Footer/>
    </div>
  )
}
