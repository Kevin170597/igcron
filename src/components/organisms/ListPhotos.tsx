"use client"
import { useState, useEffect } from "react"
import { AlbumOrPhotoCard } from "../molecules"
import { useSession } from "next-auth/react"
import { getPosts } from "@/services"
import { PostInterface } from "@/interfaces"

export const ListPhotos = () => {
    const [photos, setPhotos] = useState<PostInterface[] | null>()
    const { data: session } = useSession()

    useEffect(() => {
        const fetchPosts = async () => {
            if (session && session.user) {
                const photos = await getPosts("photo", session?.user.username, session?.user.token)
                setPhotos(photos)
            }
        }
        fetchPosts()
    }, [session])

    return (
        <div className="grid grid-cols-3 gap-1">
            {photos && photos.length && photos.map((photo) =>
                <AlbumOrPhotoCard key={photo._id} albumOrPhoto={photo} />
            )}
        </div>
    )
}