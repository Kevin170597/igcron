"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { PostInterface } from "@/interfaces"
import { Icon } from "@/components"

export const AlbumCard = ({ album }: { album: PostInterface }) => {
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/detail/album/${album._id}`)} className="cursor-pointer hover:opacity-80 relative">
            <Image
                className="w-full aspect-square object-cover"
                width={0}
                height={0}
                sizes="100vw"
                alt="preview"
                src={album.urls ? album.urls[0] : ""}
            />
            <p className="flex items-center gap-1 text-xs text-slate-700 bg-slate-200 absolute bottom-2 right-2 p-1 rounded">
                <Icon iconName="clock" fill="#303030" size={14} />
                {album.day} {album.hour}
            </p>
        </div>
    )
}