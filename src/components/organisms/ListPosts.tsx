"use client"
import { useState, useEffect } from "react"
import { StoryCard, ReelCard, AlbumOrPhotoCard } from "../molecules"
import { useSession } from "next-auth/react"
import { getPosts } from "@/services"
import { PostInterface } from "@/interfaces"
import { postType } from "@/types"

export const ListPosts = ({ type }: { type: postType }) => {
    const [posts, setPosts] = useState<PostInterface[] | null>()
    const { data: session } = useSession()

    useEffect(() => {
        const fetchPosts = async () => {
            if (session && session?.user) {
                const posts = await getPosts(type, session?.user.username, session?.user.token)
                setPosts(posts)
            }
        }
        fetchPosts()
    }, [session])

    const setGrid = () => {
        if (type === "album" || type === "photo") return "grid grid-cols-3 gap-1"
        if (type === "story" || type === "reel") return "grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-1"
    }

    return (
        <div className={setGrid()}>
            {(type === "album" || type === "photo") &&
                posts && posts.map((post) =>
                    <AlbumOrPhotoCard key={post._id} albumOrPhoto={post} />
                )
            }
            {type === "reel" &&
                posts && posts.map((post) =>
                    <ReelCard key={post._id} reel={post} />
                )
            }
            {type === "story" &&
                posts && posts.map((post) => 
                    <StoryCard key={post._id} story={post} />
                )
            }
            {posts?.length === 0 &&
                <div className="flex justify-center items-center bg-[#262626] aspect-square">
                    <p>Nothing here!</p>
                </div>
            }
        </div>
    )
}