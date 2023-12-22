const BACK_URL = process.env.BACK_URL as string
const NEXT_PUBLIC_BACK_URL = process.env.NEXT_PUBLIC_BACK_URL as string

type postType = "album" | "photo" | "story" | "reel"

const fetchData = async (url: string, options?: RequestInit) => {
    const response = await fetch(url, { cache: "no-store", ...options })
    return await response.json()
}

export const getPost = async (type: postType, username: string, token:string, id: string) => {
    return await fetchData(`${NEXT_PUBLIC_BACK_URL}/${type}/${username}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    })
}

export const getPosts = async (type: postType, username: string, token: string) => {
    return await fetchData(`${NEXT_PUBLIC_BACK_URL}/${type}/${username}/all`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    })
}

export const addPost = async (type: postType, post: any, username: string, token: string) => {
    return await fetchData(`${NEXT_PUBLIC_BACK_URL}/${type}/${username}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(post)
    })
}

export const updatePost = async (type: postType, id: string, data: any, token: string) => {
    return await fetchData(`${NEXT_PUBLIC_BACK_URL}/${type}/update/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(data)
    })
}

export const deletePost = async (type: postType, id: string) => {
    return await fetchData(`${NEXT_PUBLIC_BACK_URL}/${type}/delete/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
}
