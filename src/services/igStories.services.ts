"use server"
import { IgStoryModel } from "@/models"
import { dbConnect } from "@/lib"
import { IgStoryInterface } from "@/interfaces"

export const getAllProgrammedStories = async (): Promise<IgStoryInterface[]> => {
    await dbConnect()
    const res = await IgStoryModel.find()
    return res
}

export const getProgrammedStory = async (username: string, day: string, hour: string): Promise<IgStoryInterface> => {
    await dbConnect()
    const res = await IgStoryModel.findOne({
        $and: [
            { "username": username },
            {"day": day },
            {"hour": hour }
        ]
    })
    return res
}

export const addProgrammedStory = async (story: IgStoryInterface) => {
    await dbConnect()
    const res = await IgStoryModel.create(story)
    return res
}