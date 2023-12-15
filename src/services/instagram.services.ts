const BACK_URL = process.env.BACK_URL as string
const NEXT_PUBLIC_BACK_URL = process.env.NEXT_PUBLIC_BACK_URL as string

export const instagramLogin = async (username: string, password: string) => {
    const response = await fetch(`${NEXT_PUBLIC_BACK_URL}/instagram/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username, password
        })
    })
    return await response.json()
}