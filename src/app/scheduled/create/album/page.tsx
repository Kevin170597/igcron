import { Metadata } from "next"
import { CreatePostForm } from "@/components"

export const metadata: Metadata = {
    title: "Program Album"
}

export default function ProgramAlbum() {

    return (
        <div className="h-[90vh] flex md:items-center md:justify-center">
            <CreatePostForm type="album" />
        </div>
    )
}