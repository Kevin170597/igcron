import Image from "next/image"
import { AlbumSlide } from "../../widgets/AlbumSlide"
import { AlbumUpdateForm } from "../../widgets/AlbumUpdateForm"
import { PostInterface } from "@/interfaces"
import { getAlbum } from "@/services"

const fetchAlbum = async (id: string): Promise<PostInterface> => {
    return await getAlbum(id)
}

export default async function AlbumDetail({ params }: { params: { id: string } }) {
    const album = await fetchAlbum(params.id)

    return (
        <div className="h-[100vh] py-4 px-[20%]">
            <div className="flex border border-solid border-[#383838]">
                <div className="w-3/5">
                    <AlbumSlide images={album.urls ? album.urls : []} />
                </div>
                <div className="w-2/5">
                    <p className="text-sm p-4 flex w-full border-b border-b-solid border-b-[#383838]">Bullworth.pics</p>
                    <AlbumUpdateForm album={album} />
                </div>
            </div>
        </div>
    )
}