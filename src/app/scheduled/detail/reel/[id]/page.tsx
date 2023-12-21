import { UpdatePostForm } from "@/components"

export default async function ReelDetail({ params }: { params: { id: string } }) {

    return (
        <div className="h-[90vh] flex md:items-center md:justify-center">
            <UpdatePostForm type="reel" id={params.id} />
        </div>
    )
}