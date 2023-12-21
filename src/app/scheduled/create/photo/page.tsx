import { Metadata } from "next"
import { CreatePostForm } from "@/components"

export const metadata: Metadata = {
    title: "Program Photo"
}

export default function CreatePhoto() {

    return (
        <div className="h-[90vh] flex md:items-center md:justify-center">
            <CreatePostForm type="photo" />
        </div>
    )
}