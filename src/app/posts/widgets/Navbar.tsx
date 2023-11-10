"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Icon } from "@/components"

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

export const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className='h-12 gap-14 flex justify-center items-center border-t border-b border-[#383838] border-solid'>
            <NavLink
                href={"/posts"}
                iconName="grid"
                text="ALBUMS"
                isActive={pathname === "/posts"}
            />
            <NavLink
                href={"/posts/photos"}
                iconName="picture"
                text="PHOTOS"
                isActive={pathname === "/posts/photos"}
            />
            <NavLink
                href={"/posts/stories"}
                iconName="stories"
                text="STORIES"
                isActive={pathname === "/posts/stories"}
            />
        </nav>
    )
}