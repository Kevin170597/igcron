"use client"
import { useState, useEffect } from "react"
import { StoryCard } from "../molecules"
import { useSession } from "next-auth/react"
import { getPosts } from "@/services"
import { PostInterface } from "@/interfaces"

export const ListStories = () => {
    const [stories, setStories] = useState<PostInterface[] | null>()
    const { data: session } = useSession()

    useEffect(() => {
        const fetchPosts = async () => {
            if (session && session?.user) {
                const stories = await getPosts("story", session?.user.username, session?.user.token)
                setStories(stories)
            }
        }
        fetchPosts()
    }, [session])

    return (
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-1">
            {stories && stories.length && stories.map((story) =>
                <StoryCard key={story._id} story={story} />
            )}
        </div>
    )
}