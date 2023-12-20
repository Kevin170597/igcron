"use client"
import { useState, useEffect } from "react"
import { ReelCard } from "../molecules"
import { useSession } from "next-auth/react"
import { getPosts } from "@/services"
import { PostInterface } from "@/interfaces"

export const ListReels = () => {
    const [reels, setReels] = useState<PostInterface[] | null>()
    const { data: session } = useSession()

    useEffect(() => {
        const fetchPosts = async () => {
            if (session && session.user) {
                const reels = await getPosts("reel", session?.user.username, session?.user.token)
                setReels(reels)
            }
        }
        fetchPosts()
    }, [session])

    return (
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-1">
            {reels && reels.length && reels.map((reel) =>
                <ReelCard key={reel._id} reel={reel} />
            )}
        </div>
    )
}