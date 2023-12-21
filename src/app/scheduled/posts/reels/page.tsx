import { Metadata } from "next"
import { ListPosts } from "@/components"

export const metadata: Metadata = {
    title: "Reels"
}

export default function Reels() {

    return (
        <div className="bg-black">
            <ListPosts type="reel" />
        </div>
    )
} 
