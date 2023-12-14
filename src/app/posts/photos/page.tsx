import { Metadata } from "next"
import { PostInterface } from "@/interfaces"
import { getPosts } from "@/services"
import { AlbumOrPhotoCard } from "@/components"

export const metadata: Metadata = {
    title: "Photos"
}

const fetchPhotos = async (): Promise<PostInterface[]> => {
    return await getPosts("photo")
}

export default async function Photos() {
    const photos = await fetchPhotos()

    return (
        <div className="bg-black grid grid-cols-3 gap-1" >
            {photos.length && photos.map((photo) =>
                <AlbumOrPhotoCard key={photo._id} albumOrPhoto={photo} />
            )}
        </div>
    )
}
