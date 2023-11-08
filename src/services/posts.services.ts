import { PostInterface } from "@/interfaces"

const BACK_URL = process.env.BACK_URL

export const getAlbum = async (id: string) => {
    const req = await fetch(`${BACK_URL}/posts/album/bullworth.pics/${id}`, { cache: "no-store" })
    const res = await req.json()
    return res
}

export const getAlbums = async () => {
    const req = await fetch(`${BACK_URL}/posts/album/all`, { cache: "no-store" })
    return await req.json()
}

export const addAlbum = async (album: any) => {
    const req = await fetch(`${BACK_URL}/posts/album/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(album)
    })
    return await req.json()
}

export const updateAlbum = async (id: string, data: any) => {
    const req = await fetch(`${BACK_URL}/posts/album/update/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return await req.json()
}