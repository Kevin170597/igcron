import { UpdateAlbumForm } from "@/components"
import { PostInterface } from "@/interfaces"
import { getPost } from "@/services"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const album = await getPost("album", params.id)

    return {
        title: album.caption ? album.caption : `Album - ${album.day}`,
        icons: {
            icon: "https://raw.githubusercontent.com/Kevin170597/my-drive/main/bully.jpg"
        }
    }
}

const fetchAlbum = async (id: string): Promise<PostInterface> => {
    return await getPost("album", id)
}

export default async function AlbumDetail({ params }: { params: { id: string } }) {
    const album = await fetchAlbum(params.id)

    return (
        <div className="h-[90vh] flex md:items-center md:justify-center">
            <UpdateAlbumForm album={album} />
        </div>
    )
}
