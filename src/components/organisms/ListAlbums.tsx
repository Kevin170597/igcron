"use client"
import { useState, useEffect } from "react"
import { AlbumOrPhotoCard } from "../molecules"
import { useSession } from "next-auth/react"
import { getPosts } from "@/services"
import { PostInterface } from "@/interfaces"

export const ListAlbums = () => {
    const [albums, setAlbums] = useState<PostInterface[] | null>()
    const { data: session } = useSession()

    useEffect(() => {
        const fetchPosts = async () => {
            if (session && session.user) {
                const albums = await getPosts("album", session?.user.username, session?.user.token)
                setAlbums(albums)
            }
        }
        fetchPosts()
    }, [session])

    return (
        <div className="grid grid-cols-3 gap-1">
            {albums && albums.length && albums.map((album) =>
                <AlbumOrPhotoCard key={album._id} albumOrPhoto={album} />
            )}
        </div>
    )
}