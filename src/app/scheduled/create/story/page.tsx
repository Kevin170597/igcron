import { Metadata } from "next"
import { CreatePostForm } from "@/components"

export const metadata: Metadata = {
	title: "Program Story"
}

export default function CreateStory() {

	return (
		<div className="h-[90vh] flex md:items-center md:justify-center">
			<CreatePostForm type="story" />
		</div>
	)
}
