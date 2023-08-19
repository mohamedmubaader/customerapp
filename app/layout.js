import './globals.css'
import { Poppins } from 'next/font/google'

const popin = Poppins({ subsets: ['latin'], weight: ['300','400','500','600'] })

export const metadata = {
  title: 'Mubaader CRM',
  description: 'Mubaader CRM',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={popin.className}>{children}</body>
    </html>
  )
}
