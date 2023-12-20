import type { Metadata } from "next"
import { ListAlbums } from "@/components"

export const metadata: Metadata = {
    title: "Albums"
}

export default function Albums() {

    return (
        <div className="bg-black">
            <ListAlbums />
        </div>
    )
}
