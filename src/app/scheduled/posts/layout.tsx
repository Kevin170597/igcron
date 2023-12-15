import { PostsNavbar } from "@/components"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="py-4">
            <PostsNavbar />
            {children}
        </div>
    )
}
