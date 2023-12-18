import { UpdatePhotoForm } from "@/components"
import { getPost } from "@/services"
import { PostInterface } from "@/interfaces"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const photo = await getPost("photo", params.id)

    return {
        title: photo.caption ? photo.caption : `Album - ${photo.day}`,
        icons: {
            icon: "https://raw.githubusercontent.com/Kevin170597/my-drive/main/bully.jpg"
        }
    }
}

const fetchPhoto = async (id: string): Promise<PostInterface> => {
    return await getPost("photo", id)
}

export default async function PhotoDetail({ params }: { params: { id: string } }) {
    const photo = await fetchPhoto(params.id)

    return (
        <div className="h-[90vh] flex md:items-center md:justify-center">
            <UpdatePhotoForm photo={photo} />
        </div>
    )
}
