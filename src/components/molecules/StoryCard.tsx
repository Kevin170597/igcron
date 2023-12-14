"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { PostInterface } from "@/interfaces"
import { Icon } from "../atoms/Icon"

export const StoryCard = ({ story }: { story: PostInterface }) => {
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/detail/story/${story._id}`)} className="cursor-pointer hover:opacity-80 relative">
            {story.hour &&
                <Image 
                    className="w-full object-cover"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="preview"
                    src={story.url ? story.url : ""}
                    priority={true}
                />
            }
            <p className="flex items-center gap-1 text-xs text-slate-700 bg-slate-200 absolute bottom-2 right-2 p-1 rounded">
                <Icon iconName="clock" fill="#303030" size={14} />
                {story.day} {story.hour}
            </p>
        </div>
    )
}
