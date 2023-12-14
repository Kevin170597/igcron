
export interface PostInterface {
    _id: string,
    type: "album" | "photo" | "story" | "reel",
    caption?: string,
    urls?: string[],
    url?: string,
    username: string,
    day: string,
    hour: string
}
