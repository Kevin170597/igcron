import { Metadata } from "next"
import { PostInterface } from "@/interfaces"
import { getPosts } from "@/services"
import { StoryCard } from "@/components"

export const metadata: Metadata = {
    title: "Stories"
}

const fetchStories = async (): Promise<PostInterface[]> => {
    return await getPosts("story")
}

export default async function Stories() {
    const stories = await fetchStories()

    return (
        <div className="bg-black grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-1">
            {stories.map((story) =>
                <StoryCard key={story._id} story={story} />
            )}
        </div>
    )
}
