import { Metadata } from "next"
import { ListPosts } from "@/components"

export const metadata: Metadata = {
    title: "Stories"
}

export default function Stories() {

    return (
        <div className="bg-black">
            <ListPosts type="story" />
        </div>
    )
}
