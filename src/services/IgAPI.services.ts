import { IgApiClient } from "instagram-private-api"
import { get } from "request-promise"

const ig = new IgApiClient()

export const igLogin = async (username: string, password: string) => {
    ig.state.generateDevice(username)
    return await ig.account.login(username, password)
}

export const createPost = async (username: string, urls: string[], caption: string) => {
    await igLogin(username, process.env[`${username.toUpperCase()}_IG_PASSWORD`] as string)

    let imagesBuffer: { file: Buffer }[] = []

    for (const url of urls) {
        const file = await get({ url, encoding: null })
        imagesBuffer.push({ file })
    }

    const publishResult = await ig.publish.album({
        items: imagesBuffer,
        caption: caption
    })

    return publishResult
}

export const createStory = async (username: string, url: string) => {
    await igLogin(username, process.env[`${username.toUpperCase()}_IG_PASSWORD`] as string)

    const imageBuffer = await get({
        url,
        encoding: null,
    });

    const publishResult = await ig.publish.story({
        file: imageBuffer
    })

    return publishResult
}