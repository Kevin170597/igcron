"use server"
import { nanoid } from "nanoid"

const GITHUB_API_URL = process.env.GITHUB_API_URL
const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN
const GITHUB_RAW_URL = process.env.GITHUB_RAW_URL

export const uploadImageToGithub = async (image: string) => {
    const fileName = nanoid(5)
    await fetch(`${GITHUB_API_URL}/bullworth.pics/${fileName}.jpg`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${GITHUB_API_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "message": `commit-${fileName}`,
            "content": image.split(",")[1]
        })
    })
    return `${GITHUB_RAW_URL}/bullworth.pics/${fileName}.jpg`
}