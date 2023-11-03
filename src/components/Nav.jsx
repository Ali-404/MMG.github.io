import { FaDiscord } from "react-icons/fa6";


import '../styles/nav.css'

export default function Nav() {
  return (
    <nav>
        <img src='images/logo.png' alt=""/>
        <a className="link" href="https://discord.gg/marocmultigaming-support-793207913819799573" target="_blank" rel="noreferrer">
            <span>Discord</span>
            <FaDiscord />
        </a>
    </nav>
  )
}
