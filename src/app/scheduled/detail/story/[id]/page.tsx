import { UpdateStoryForm } from "@/components"
import { getPost } from "@/services"
import { PostInterface } from "@/interfaces"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const story = await getPost("story", params.id)

    return {
        title: story.caption ? story.caption : `Story - ${story.day}`,
        icons: {
            icon: "https://raw.githubusercontent.com/Kevin170597/my-drive/main/bully.jpg"
        },
        description: story.caption ? story.caption : `Reel - ${story.day}`
    }
}

const fetchStory = async (id: string): Promise<PostInterface> => {
    return await getPost("story", id)
}

export default async function StoryDetail({ params }: { params: { id: string } }) {
	const story = await fetchStory(params.id)

	return (
		<div className="h-[90vh] flex md:items-center md:justify-center">
			<UpdateStoryForm story={story} />
		</div>
	)
}
