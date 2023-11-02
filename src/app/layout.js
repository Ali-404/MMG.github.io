import { Inter } from 'next/font/google'
import './globals.css'

import '@fortawesome/fontawesome-svg-core/styles.css'

const font = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MMG Offial Website',
  description: 'MMG | Maroc Multi Gaming | Mods | Cars | FiveM | MTA SA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
