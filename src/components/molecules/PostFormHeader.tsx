"use client"
import { useSession } from "next-auth/react"
import Image from "next/image"

export const PostFormHeader = ({ type }: { type: string }) => {
    const { data: session } = useSession()

    return (
        <div className="flex items-center gap-2 mb-6">
            {session && session.user &&
                <>
                    <Image
                        src={session.user.profile_pic_url}
                        width={10}
                        height={10}
                        alt="flag"
                        className="w-6 h-6 rounded-full"
                    />
                    <p className="text-sm">{session.user.username}</p>
                    <p className="text-sm ml-auto text-[#47a797] bg-[#383838] px-2 py-1 rounded">
                        {type}
                    </p>
                </>
            }
        </div>
    )
}