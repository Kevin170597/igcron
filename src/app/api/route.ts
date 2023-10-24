import { IgApiClient } from "instagram-private-api"
import { get } from "request-promise"

export async function GET(request: Request) {
    /*try {
        const ig = new IgApiClient()
        ig.state.generateDevice("bullworth.pics")
        const auth = await ig.account.login("", "")
        //console.log(JSON.stringify(auth))

        const imageBuffer = await get({
            url: "https://i.kym-cdn.com/photos/images/original/001/468/202/b02.jpg",
            encoding: null
        })

        const imageBuffer2 = await get({
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1025px-Cat03.jpg",
            encoding: null
        })

        const imageBuffer3 = await get({
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1025px-Cat03.jpg",
            encoding: null
        })

        const publishResult = await ig.publish.album({
            items: [
                {
                    file: imageBuffer,
                    width: 100,
                    height: 100
                },
                {
                    file: imageBuffer2,
                    width: 200,
                    height: 200
                },
                {
                    file: imageBuffer3,
                    width: 400,
                    height: 400
                },
            ],
            caption: "hello from api."
        })

        return new Response(JSON.stringify(publishResult))
    } catch (error) {
        return new Response(JSON.stringify(error))
    }*/
    console.log("every 1 minute")
    return new Response(JSON.stringify({ hello: "every 1 minute" }))
}