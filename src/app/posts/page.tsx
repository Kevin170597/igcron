import { AlbumOrPhotoCard } from '@/components'
import type { Metadata } from 'next'
import { PostInterface } from '@/interfaces'
import { getPosts } from '@/services'

export const metadata: Metadata = {
    title: "Albums"
}

const fetchAlbums = async (): Promise<PostInterface[]> => {
    return await getPosts("album")
}

export default async function Albums() {
    const albums = await fetchAlbums()

    return (
        <div className="bg-black grid grid-cols-3 gap-1">
            {albums.length && albums.map((album) =>
                <AlbumOrPhotoCard key={album._id} albumOrPhoto={album} />
            )}
        </div>
    )
}
