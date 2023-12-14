import { Metadata } from "next"
import { CreatePhotoForm } from "@/components"

export const metadata: Metadata = {
    title: "Program Photo"
}

export default function CreatePhoto() {

    return (
        <div className="h-[90vh] flex items-center justify-center">
            <CreatePhotoForm />
        </div>
    )
}