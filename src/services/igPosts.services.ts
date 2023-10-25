"use server"
import { IgPostModel } from "@/models"
import { dbConnect } from "@/lib"
import { IgPostInterface } from "@/interfaces"

export const getAllProgrammedPosts = async (): Promise<IgPostInterface[]> => {
    await dbConnect()
    const res = await IgPostModel.find({})
    return res
}

export const getProgrammedPost = async (username: string, day: string, hour: string): Promise<IgPostInterface> => {
    await dbConnect()
    const res = await IgPostModel.findOne({
        $and: [
            { "username": username },
            {"day": day },
            {"hour": hour }
        ]
    })
    return res
}

export const addProgrammedPost = async (igPost: IgPostInterface) => {
    await dbConnect()
    const res = await IgPostModel.create(igPost)
    return res
}