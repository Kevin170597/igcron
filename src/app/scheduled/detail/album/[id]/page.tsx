import { UpdateAlbumForm } from "@/components"

export default async function AlbumDetail({ params }: { params: { id: string } }) {

    return (
        <div className="h-[90vh] flex md:items-center md:justify-center">
            <UpdateAlbumForm id={params.id} />
        </div>
    )
}
