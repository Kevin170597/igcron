import { Navbar } from "./widgets"
import Link from "next/link"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="py-4">
            <Navbar />
            {children}
        </div>
    )
}