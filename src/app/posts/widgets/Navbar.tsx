"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Icon } from "@/components"

export const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className='h-12 gap-14 flex justify-center items-center border-t border-b border-[#383838] border-solid'>
            <Link
                href={"/posts"}
                className={`${pathname === "/posts" ? "font-bold border-t-2" : ""} 
                h-full flex gap-2 items-center text-xs text-gray-300`}>
                <Icon iconName="grid" fill="#fff" size={16} />
                ALBUMS
            </Link>
            <Link
                href={"/posts/photos"}
                className={`${pathname === "/posts/photos" ? "font-bold border-t-2" : ""} 
                h-full flex gap-2 items-center text-xs text-gray-300`}>
                <Icon iconName="picture" fill="#fff" size={16} />
                PHOTOS
            </Link>
            <Link
                href={"/posts/stories"}
                className={`${pathname === "/posts/stories" ? "font-bold border-t-2" : ""} 
                h-full flex gap-2 items-center text-xs text-gray-300`}>
                <Icon iconName="stories" fill="#fff" size={18} />
                STORIES
            </Link>
        </nav>
    )
}