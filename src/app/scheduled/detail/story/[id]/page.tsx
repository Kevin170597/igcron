import { UpdatePostForm } from "@/components"

export default async function StoryDetail({ params }: { params: { id: string } }) {

	return (
		<div className="h-[90vh] flex md:items-center md:justify-center">
			<UpdatePostForm type="story" id={params.id} />
		</div>
	)
}
