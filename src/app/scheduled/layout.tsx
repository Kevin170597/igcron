import { Header } from '@/components'
import type { Metadata } from 'next'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}