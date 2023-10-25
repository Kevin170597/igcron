import { NextRequest } from "next/server"
import { createStory, getProgrammedStory } from "@/services"

export async function GET(request: NextRequest) {
    const username = request.nextUrl.searchParams.get("username") as string
    const day = request.nextUrl.searchParams.get("day") as string
    const hour = request.nextUrl.searchParams.get("hour") as string

    const { url } = await getProgrammedStory(username, day, hour)
    const igStory = await createStory(username, url)

    return new Response(JSON.stringify(igStory))
}