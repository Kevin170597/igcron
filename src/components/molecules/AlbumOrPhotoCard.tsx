"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { PostInterface } from "@/interfaces"
import { Icon } from "../atoms/Icon"

export const AlbumOrPhotoCard = ({ albumOrPhoto }: { albumOrPhoto: PostInterface }) => {
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/scheduled/detail/${albumOrPhoto.type}/${albumOrPhoto._id}`)} className="cursor-pointer hover:opacity-80 relative">
            {albumOrPhoto.urls &&
            <Image
                className="w-full aspect-square object-cover"
                width={0}
                height={0}
                sizes="100vw"
                alt="preview"
                src={albumOrPhoto.urls ? albumOrPhoto.urls[0] : ""}
                priority={true}
            />
            }
            {albumOrPhoto.url &&
            <Image 
                className="w-full aspect-square object-cover"
                width={0}
                height={0}
                sizes="100vw"
                alt="preview"
                src={albumOrPhoto.url ? albumOrPhoto.url : ""}
                priority={true}
            />
            }
            <p className="flex items-center gap-1 text-xs text-slate-700 bg-slate-200 absolute bottom-2 right-2 p-1 rounded">
                <Icon iconName="clock" fill="#303030" size={14} />
                {albumOrPhoto.day} {albumOrPhoto.hour}
            </p>
        </div>
    )
}
