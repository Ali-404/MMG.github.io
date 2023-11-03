import '../styles/section.css'
import '../styles/homeSection.css'
import Nav from "../components/Nav";

export default function HomeSection() {
  return (
    <section className='homeSection' >
        <Nav />
        <div className='bigTitle'>
            <h1>Download Best MTA Mods</h1>
            <img src='images/mtasa.png' alt=''/>
        </div>
    </section>
  )
}
