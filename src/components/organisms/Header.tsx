"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icon } from "../atoms/Icon"
import { useUser } from "@/app/AuthProvider"
import Image from "next/image"

interface NavLinkProps {
    href: string,
    iconName: string,
    text: string,
    isActive: boolean
}

const NavLink = ({ href, iconName, text, isActive }: NavLinkProps) => (
    <Link href={href}
        className={`${isActive ?
            "font-normal text-white" : "font-light text-gray-300"} 
            text-sm flex items-center gap-2`}>
        <Icon
            iconName={iconName}
            fill={isActive ? "#fff" : "#808080"}
            size={16}
        />
        {text}
    </Link>
)

interface CreateDropdownProps {
    isActive: boolean,
    onClick: () => void
}

const CreateDropdown = ({ isActive, onClick }: CreateDropdownProps) => (
    <button
        onClick={onClick}
        className={`${isActive ?
            "font-normal text-white" : "font-light text-gray-300"}
            text-sm flex items-center gap-2 hover:bg-[#262626] h-8 rounded pl-1 pr-2`}
    >
        <Icon
            iconName="plus"
            fill={isActive ? "#fff" : "#808080"}
            size={20}
        />
        CREATE
    </button>
)

const User = () => {
    const { loggedUser, logout } = useUser()

    return (
        <>
            {loggedUser &&
                <div className="ml-auto flex items-center gap-2">
                    <Image
                        src={loggedUser.profile_pic_url}
                        width={10}
                        height={10}
                        alt="flag"
                        className="w-6 h-6 rounded-full"
                    />
                    <p className="text-sm">{loggedUser.username}</p>
                    <p className="text-[#797979]">|</p>
                    <button onClick={() => logout()}>
                        <Icon iconName="logout" fill="#fff" size={20} />
                    </button>
                </div>
            }
        </>
    )
}

export const Header = () => {
    const pathname = usePathname()
    const [createLinks, setCreateLinks] = useState<boolean>(false)

    return (
        <header className="h-12 px-4 flex gap-6 items-center border-b border-b-solid border-b-[#383838]">
            <NavLink
                href="/scheduled/posts/album"
                iconName="grid"
                text="POSTS"
                isActive={pathname.includes("/posts") || pathname.includes("/detail")}
            />
            {/*<NavLink
                href="/cron-jobs"
                iconName="clock"
                text="CRON JOBS"
                isActive={pathname.includes("/cron-jobs")}
            />*/}
            <div className="relative z-20">
                <CreateDropdown
                    isActive={pathname.includes("/create")}
                    onClick={() => setCreateLinks(!createLinks)}
                />
                {createLinks &&
                    <div className="absolute top-11 bg-[#262626] py-3 px-4 rounded flex flex-col gap-3 border border-solid border-[#383838]">
                        <NavLink
                            href="/scheduled/create/album"
                            iconName="picture"
                            text="ALBUM"
                            isActive={false}
                        />
                        <NavLink
                            href="/scheduled/create/photo"
                            iconName="picture"
                            text="PHOTO"
                            isActive={false}
                        />
                        <NavLink
                            href="/scheduled/create/story"
                            iconName="picture"
                            text="STORY"
                            isActive={false}
                        />
                        <NavLink
                            href="/scheduled/create/reel"
                            iconName="picture"
                            text="REEL"
                            isActive={false}
                        />
                    </div>
                }
            </div>
            <User />
        </header>
    )
}
