import { Metadata } from "next"
import { CreatePostForm } from "@/components"

export const metadata: Metadata = {
    title: "Program Reel"
}

export default function CreateReel() {

    return (
        <div className="h-[90vh] flex md:items-center md:justify-center">
            <CreatePostForm type="reel" />
        </div>
    )
}