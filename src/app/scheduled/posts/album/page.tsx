import type { Metadata } from "next"
import { ListPosts } from "@/components"

export const metadata: Metadata = {
    title: "Albums"
}

export default function Albums() {

    return (
        <div className="bg-black">
            <ListPosts type="album" />
        </div>
    )
}
