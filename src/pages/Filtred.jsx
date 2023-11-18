
import '../styles/store.css'
import '../styles/section.css'



import Menu from '../components/Menu'

export default function Filtred() {
  return (
    <div className="store container" style={{paddingBlock:25}}>
        
        {/* elements */}

     <Menu filterType={'script'}/>
    </div>
  )
}
