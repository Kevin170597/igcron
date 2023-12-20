import { Metadata } from "next"
import { ListReels } from "@/components"

export const metadata: Metadata = {
    title: "Reels"
}

export default function Reels() {

    return (
        <div className="bg-black">
            <ListReels />
        </div>
    )
} 
