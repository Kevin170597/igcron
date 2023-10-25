import { Schema, model, models } from "mongoose"
import { IgPostInterface } from "@/interfaces"

const IgPostSchema = new Schema<IgPostInterface>(
    {
        caption: {
            type: String
        },
        urls: {
            type: [String],
            required: true
        },
        username: {
            type: String,
            required: true
        },
        day: {
            type: String,
            required: true
        },
        hour: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
        collection: "ig-posts"
    }
)

export const IgPostModel = models["ig-posts"] || model("ig-posts", IgPostSchema)