import { Header } from '@/components'
import type { Metadata } from 'next'
import { UserProvider } from './authProvider'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <UserProvider>
                <Header />
                {children}
            </UserProvider>
        </div>
    )
}
