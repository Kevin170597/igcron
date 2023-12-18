import { UpdateReelForm } from "@/components"
import { getPost } from "@/services"
import { PostInterface } from "@/interfaces"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const reel = await getPost("reel", params.id)

    return {
        title: reel.caption ? reel.caption : `Reel - ${reel.day}`,
        icons: {
            icon: "https://raw.githubusercontent.com/Kevin170597/my-drive/main/bully.jpg"
        }
    }
}

const fetchReel= async (id: string): Promise<PostInterface> => {
    return await getPost("reel", id)
}

export default async function ReelDetail({ params }: { params: { id: string } }) {
    const reel = await fetchReel(params.id)

    return (
        <div className="h-[90vh] flex md:items-center md:justify-center">
            <UpdateReelForm reel={reel} />
        </div>
    )
}