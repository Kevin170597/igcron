import { UpdatePostForm } from "@/components"

export default async function AlbumDetail({ params }: { params: { id: string } }) {

    return (
        <div className="h-[90vh] flex md:items-center md:justify-center">
            <UpdatePostForm type="album" id={params.id} />
        </div>
    )
}
