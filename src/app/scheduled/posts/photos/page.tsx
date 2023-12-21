import { Metadata } from "next"
import { ListPosts } from "@/components"

export const metadata: Metadata = {
    title: "Photos"
}

export default function Photos() {

    return (
        <div className="bg-black" >
            <ListPosts type="photo" />
        </div>
    )
}
