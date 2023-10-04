import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import CloudScene from '@/components/cluodScene'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'magic-noteBook',
  description: 'Learn english by lightner way',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          <div className='pt-1'>
            {children}
            <CloudScene />
          </div>
      </body>
    </html>
  )
}
