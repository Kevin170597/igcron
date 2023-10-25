import { NextRequest } from "next/server"
import { createPost, getProgrammedPost } from "@/services"

export async function GET(request: NextRequest) {
    const username = request.nextUrl.searchParams.get("username") as string
    const day = request.nextUrl.searchParams.get("day") as string
    const hour = request.nextUrl.searchParams.get("hour") as string

    const { urls, caption } = await getProgrammedPost(username, day, hour)
    const igPost = await createPost(username, urls, caption)

    return new Response(JSON.stringify(igPost))
}