"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icon } from "@/components"

export const Header = () => {
    const pathname = usePathname()
    const [createLinks, setCreateLinks] = useState<boolean>(false)

    return (
        <header className="h-12 px-4 flex gap-6 items-center border-b border-b-solid border-b-[#383838]">
            <Link
                href={"/posts"}
                className={`${pathname.includes("/posts") ?
                    "font-normal text-white text-sm" :
                    "font-light text-gray-300 text-sm"
                    } flex items-center gap-2`}
            >
                <Icon iconName="grid" fill="#fff" size={16} />
                POSTS
            </Link>
            <Link
                href={"/cronjobs"}
                className={`${pathname.includes("/cronjobs") ?
                    "font-normal text-white text-sm" :
                    "font-light text-gray-300 text-sm"
                    } flex items-center gap-2`}
            >
                <Icon iconName="clock" fill="#fff" size={16} />
                CRON JOBS
            </Link>
            <div className="relative z-10">
                <button
                    onClick={() => setCreateLinks(!createLinks)}
                    className={`${pathname.includes("/create/album") ?
                        "font-normal text-white text-sm" :
                        "font-light text-gray-300 text-sm"
                        } flex items-center gap-2 hover:bg-[#262626] h-8 rounded pl-1 pr-2`}>
                    <Icon iconName="plus" fill="#fff" size={20} />
                    CREATE
                </button>
                {createLinks &&
                    <div className="absolute top-9 bg-[#262626] py-3 px-4 rounded flex flex-col gap-3 border border-solid border-[#383838]">
                        <Link
                            href={"/create/album"}
                            className={"text-sm text-[#808080] flex items-center gap-2"}
                        >
                            <Icon iconName="picture" fill="#808080" size={16} />
                            ALBUM
                        </Link>
                        <Link
                            href={"/create/photo"}
                            className={"text-sm text-[#808080] flex items-center gap-2"}
                        >
                            <Icon iconName="picture" fill="#808080" size={16} />
                            PHOTO
                        </Link>
                        <Link
                            href={"/create/story"}
                            className={"text-sm text-[#808080] flex items-center gap-2"}
                        >
                            <Icon iconName="stories" fill="#808080" size={16} />
                            STORY
                        </Link>
                    </div>
                }
            </div>
        </header>
    )
}