import { AlbumSlide } from "../../widgets/AlbumSlide"
import { AlbumUpdateForm } from "../../widgets/AlbumUpdateForm"
import { PostInterface } from "@/interfaces"
import { getPost } from "@/services"

const fetchAlbum = async (id: string): Promise<PostInterface> => {
    return await getPost("album", id)
}

export default async function AlbumDetail({ params }: { params: { id: string } }) {
    const album = await fetchAlbum(params.id)
    console.log(album)

    return (
        <div className="h-[92vh] py-10 sm:px-[0%] md:px-[10%] xl:px-[20%]">
            <div className="w-full bg-[#262626] rounded flex flex-col sm:flex-col md:flex-row xl:flex-row border border-solid border-[#383838]">
                <div className="sm:w-full md:w-[60%] xl:w-[60%]">
                    <AlbumSlide images={album.urls ? album.urls : []} />
                </div>
                <div className="sm:w-full md:w-[40%] xl:w-[40%]">
                    <p className="text-sm p-4 flex w-full border-b border-b-solid border-b-[#383838]">Bullworth.pics</p>
                    <AlbumUpdateForm album={album} />
                </div>
            </div>
        </div>
    )
}
