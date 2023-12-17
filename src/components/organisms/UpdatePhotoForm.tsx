"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { Input, InputDate, Select, Textarea } from "../atoms"
import { PostFormHeader } from "../molecules"
import { useState, ChangeEvent } from "react"
import { updatePost } from "@/services"
import { PostInterface } from "@/interfaces"
import moment from "moment"

type Inputs = {
    caption: string,
    day: string,
    hour: string,
    username: string,
    url: string
}

export const UpdatePhotoForm = ({ photo }: { photo: PostInterface}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const [imageUrl, setImageUrl] = useState<string>(photo.url || "")

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        data.url = imageUrl
        data.username = "bullworth.pics"
        data.day = moment(data.day).format("DD/MM/YYYY")
        //console.log(data)
        await updatePost("photo", photo._id, data)
    }

    return (
        <div className="bg-[#262626] rounded border border-solid border-[#383838] flex h-[80%] w-[60%]">
            <div className="w-[50%] relative flex justify-center">
                <div className="w-[90%] px-4 rounded absolute top-2 bg-[#262626]">
                    <Input
                        defaultValue={photo.url}
                        name="url"
                        placeholder="https://example.com"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value)}
                    />
                </div>
                {imageUrl &&
                    <img
                        src={imageUrl}
                        alt="story image"
                        className="w-auto h-full object-cover"
                    />
                }
            </div>
            <div className="w-[50%] p-4 border-l border-l-solid border-l-[#383838]">
                <PostFormHeader type="Photo" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Textarea
                        defaultValue={photo.caption}
                        name="caption"
                        register={register}
                        required
                    />
                    <InputDate
                        defaultValue={moment(photo.day, "DD/MM/YYYY").format("YYYY-MM-DD")}
                        label="Day"
                        name="day"
                        register={register}
                        required
                    />
                    <Select
                        inputType="select"
                        defaultValue={photo.hour}
                        label="Hour"
                        name="hour"
                        required
                        register={register}
                        options={[{ optionLabel: "16:00", optionValue: "16:00" }, { optionLabel: "19:00", optionValue: "19:00" }]}
                    />
                    <button
                        type="submit"
                        className="bg-slate-200 text-sm text-black rounded px-2 mt-auto ml-auto py-2">
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
}