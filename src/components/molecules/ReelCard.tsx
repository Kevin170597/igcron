"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { PostInterface } from "@/interfaces"
import { Icon } from "../atoms/Icon"

export const ReelCard = ({ reel }: { reel: PostInterface }) => {
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/detail/story/${reel._id}`)} className="cursor-pointer hover:opacity-80 relative">
            {reel.hour &&
                <video src={reel.url}></video>
            }
            <p className="flex items-center gap-1 text-xs text-slate-700 bg-slate-200 absolute bottom-2 right-2 p-1 rounded">
                <Icon iconName="clock" fill="#303030" size={14} />
                {reel.day} {reel.hour}
            </p>
        </div>
    )
}