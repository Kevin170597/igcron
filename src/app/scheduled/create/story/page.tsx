import { Metadata } from "next"
import { CreateStoryForm } from "@/components"

export const metadata: Metadata = {
  title: "Program Story"
}

export default function CreateStory() {

  return (
    <div className="h-[90vh] flex items-center justify-center">
      <CreateStoryForm />
    </div>
  )
}
