"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { Input, InputDate, Select, Textarea, Icon } from "../atoms"
import { PostFormHeader } from "../molecules"
import { useState, ChangeEvent } from "react"
import { addPost } from "@/services"
import moment from "moment"

type Inputs = {
    caption: string,
    day: string,
    hour: string,
    username: string,
    url: string
}

export const CreatePhotoForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const [imageUrl, setImageUrl] = useState<string>("")
    const [isUrlListVisible, setUrlVisibility] = useState<boolean>(true)

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        data.url = imageUrl
        data.username = "bullworth.pics"
        data.day = moment(data.day).format("DD/MM/YYYY")
        console.log(data)
        await addPost("photo", data)
    }

    return (
        <div className="bg-[#262626] rounded border border-solid border-[#383838] flex h-[80%] w-[60%]">
            <div className="w-[50%] relative flex justify-center">
                {!isUrlListVisible &&
                    <button
                        onClick={() => setUrlVisibility(true)}
                        className="z-10 absolute top-2 right-2 bg-[#262626] w-6 h-6 rounded-full flex items-center justify-center">
                        <Icon iconName="arrowDown" fill="#fff" size={20} />
                    </button>
                }
                {isUrlListVisible &&
                    <div className="w-[90%] px-4 rounded absolute top-2 pb-4 bg-[#262626] border border-solid border-[#383838]">
                        <Input
                            name="url"
                            placeholder="https://example.com"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value)}
                        />
                        <button
                            onClick={() => setUrlVisibility(false)}
                            className="bg-[#383838] w-6 h-6 rounded-full flex items-center justify-center"
                        >
                            <Icon iconName="arrowUp" fill="#fff" size={20} />
                        </button>
                    </div>
                }
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
                        name="caption"
                        register={register}
                        required
                    />
                    <InputDate
                        label="Day"
                        name="day"
                        register={register}
                        required
                    />
                    <Select
                        inputType="select"
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