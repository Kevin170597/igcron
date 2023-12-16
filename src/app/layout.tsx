import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UserProvider } from "./AuthProvider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Instagrapy",
  icons: { 
    icon: { url: "/favicon.png", type: "image/png" } 
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={`sm:px-0 md:px-20 lg:px-20 bg-black text-white ${inter.className}`}>
          {children}
        </body>
      </UserProvider>
    </html>
  )
}
