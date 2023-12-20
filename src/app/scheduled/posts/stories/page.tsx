import { Metadata } from "next"
import { ListStories } from "@/components"

export const metadata: Metadata = {
    title: "Stories"
}

export default function Stories() {

    return (
        <div className="bg-black">
            <ListStories />
        </div>
    )
}
