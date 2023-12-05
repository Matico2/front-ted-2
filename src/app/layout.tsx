import Navbar from '@/components/layouts/navbar'
import './globals.css'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children, }: {
    children: React.ReactNode
  }) {
  return (
    <body className={inter.className}>
      <Navbar />
      {children}
    </body>

  )
}
