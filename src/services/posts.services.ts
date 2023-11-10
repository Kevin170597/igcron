const BACK_URL = process.env.BACK_URL as string
const NEXT_PUBLIC_BACK_URL = process.env.NEXT_PUBLIC_BACK_URL

const fetchData = async (url: string, options?: RequestInit) => {
    const response = await fetch(url, { cache: "no-store", ...options })
    return await response.json()
}

export const getAlbum = async (id: string) => {
    return await fetchData(`${BACK_URL}/posts/album/bullworth.pics/${id}`)
}

export const getAlbums = async () => {
    return await fetchData(`${BACK_URL}/posts/album/all`)
}

export const addAlbum = async (album: any) => {
    return await fetchData(`${NEXT_PUBLIC_BACK_URL}/posts/album/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(album)
    })
}

export const updateAlbum = async (id: string, data: any) => {
    return await fetchData(`${NEXT_PUBLIC_BACK_URL}/posts/album/update/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
}

/*export const getAlbum = async (id: string) => {
    const req = await fetch(`${BACK_URL}/posts/album/bullworth.pics/${id}`, { cache: "no-store" })
    const res = await req.json()
    return res
}

export const getAlbums = async () => {
    const req = await fetch(`${BACK_URL}/posts/album/all`, { cache: "no-store" })
    return await req.json()
}

export const addAlbum = async (album: any) => {
    const req = await fetch(`${NEXT_PUBLIC_BACK_URL}/posts/album/add`, {
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
}*/