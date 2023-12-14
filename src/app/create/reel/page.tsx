import { Metadata } from "next"
import { CreateReelForm } from "@/components"

export const metadata: Metadata = {
    title: "Program Reel"
}

export default function CreateReel() {

    return (
        <div className="h-[90vh] flex items-center justify-center">
            <CreateReelForm />
        </div>
    )
}