const BACK_URL = process.env.BACK_URL as string
const NEXT_PUBLIC_BACK_URL = process.env.NEXT_PUBLIC_BACK_URL as string

type postType = "album" | "photo" | "story" | "reel"

const fetchData = async (url: string, options?: RequestInit) => {
    const response = await fetch(url, { cache: "no-store", ...options })
    return await response.json()
}

export const getPost = async (type: postType, id: string) => {
    return await fetchData(`${BACK_URL}/${type}/bullworth.pics/${id}`)
}

export const getPosts = async (type: postType) => {
    return await fetchData(`${BACK_URL}/${type}/bullworth.pics/all`)
}

export const addPost = async (type: postType, post: any) => {
    return await fetchData(`${NEXT_PUBLIC_BACK_URL}/${type}/bullworth.pics/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post)
    })
}

export const updateAlbum = async (id: string, data: any) => {
    return await fetchData(`${NEXT_PUBLIC_BACK_URL}/album/update/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
}

export const deleteAlbum = async (id: string) => {
    return await fetchData(`${NEXT_PUBLIC_BACK_URL}/album/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
