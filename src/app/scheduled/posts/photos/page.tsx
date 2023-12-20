import { Metadata } from "next"
import { ListPhotos } from "@/components"

export const metadata: Metadata = {
    title: "Photos"
}


export default function Photos() {

    return (
        <div className="bg-black" >
            <ListPhotos />
        </div>
    )
}
