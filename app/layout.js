"use client"
import './globals.css'
import { Poppins } from 'next/font/google'
// import { store } from './../redux/store'
import { Providers } from './../redux/provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const popin = Poppins({ subsets: ['latin'], weight: ['300','400','500','600'] })

export const metadata = {
  title: 'Mubaader CRM',
  description: 'Mubaader CRM',
  
}

// create a client

const queryClient = new QueryClient()

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={popin.className}>
       <QueryClientProvider client={queryClient}>
          <Providers> 
             {children}
          </Providers>
       </QueryClientProvider>
      </body>
    </html>
  )
}
