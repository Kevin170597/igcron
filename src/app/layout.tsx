import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './widgets'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "IG Cron"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`sm:px-0 md:px-20 lg:px-20 bg-black text-white ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
