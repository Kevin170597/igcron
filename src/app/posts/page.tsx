import { AlbumCard } from './widgets/AlbumCard'
import type { Metadata } from 'next'
import { PostInterface } from '@/interfaces'
import { getAlbums } from '@/services'

export const metadata: Metadata = {
    title: "Albums"
}

const fetchAlbums = async (): Promise<PostInterface[]> => {
    return await getAlbums()
}

export default async function Albums() {
    const albums = await fetchAlbums()

    return (
        <div className="bg-black grid grid-cols-3 gap-1">
            {albums.length && albums.map((album) =>
                <AlbumCard key={album._id} album={album} />
            )}
        </div>
    )
}