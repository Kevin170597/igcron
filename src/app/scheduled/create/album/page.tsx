import { Metadata } from "next"
import { CreateAlbumForm } from "@/components"

export const metadata: Metadata = {
    title: "Program Album"
}

export default function ProgramAlbum() {

    return (
        <div className="flex items-start sm:items-start md:items-center lg:items-center justify-center py-4 min-h-[88vh] w-full">
            <CreateAlbumForm />
        </div>
    )
}