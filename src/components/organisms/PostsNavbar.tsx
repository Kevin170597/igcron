"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Icon } from "../atoms/Icon"

interface NavLinkProps {
    href: string,
    iconName: string,
    text: string,
    isActive: boolean
}

const NavLink = ({ href, iconName, text, isActive }: NavLinkProps) => (
    <Link
        href={href}
        className={`h-full flex gap-2 items-center text-xs text-gray-300 
        ${isActive ? "font-bold border-t-2" : ""}`}
    >
        <Icon
            iconName={iconName}
            fill={isActive ? "#fff" : "#808080"}
            size={isActive ? 18 : 16}
        />
        {text}
    </Link>
)

export const PostsNavbar = () => {
    const pathname = usePathname()
    return (
        <nav className='h-12 gap-6 sm:gap-6 md:gap-14 lg:gap-14 flex justify-center items-center border-t border-b border-[#383838] border-solid'>
            <NavLink
                href={"/scheduled/posts/album"}
                iconName="grid"
                text="ALBUMS"
                isActive={pathname === "/scheduled/posts/album"}
            />
            <NavLink
                href={"/scheduled/posts/photos"}
                iconName="picture"
                text="PHOTOS"
                isActive={pathname === "/scheduled/posts/photos"}
            />
            <NavLink
                href={"/scheduled/posts/stories"}
                iconName="stories"
                text="STORIES"
                isActive={pathname === "/scheduled/posts/stories"}
            />
            <NavLink 
                href={"/scheduled/posts/reels"}
                iconName="stories"
                text="REELS"
                isActive={pathname === "/scheduled/posts/reels"}
            />
        </nav>
    )
}
