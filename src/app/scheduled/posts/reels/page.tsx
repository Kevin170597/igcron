import { Metadata } from "next"
import { PostInterface } from "@/interfaces"
import { getPosts } from "@/services"
import { ReelCard } from "@/components"

export const metadata: Metadata = {
    title: "Reels"
}

const fetchReels = async (): Promise<PostInterface[]> => {
    return await getPosts("reel")
}

export default async function Reels() {
    const reels = await fetchReels()

    return (
        <div className="bg-black grid grid-cols-5 gap-1">
            {reels.map((reel) =>
                <ReelCard key={reel._id} reel={reel} />
            )}
        </div>
    )
} 
