import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'

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
        <main className='bg-sky-300 h-[100vh]'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
