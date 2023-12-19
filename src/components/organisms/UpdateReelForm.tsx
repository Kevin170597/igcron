"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { Input, InputDate, Select, Textarea, Icon } from "../atoms"
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

export const UpdateReelForm = ({ reel }: { reel: PostInterface }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const [videoUrl, setVideoUrl] = useState<string>(reel.url || "")
    const [isUrlListVisible, setUrlVisibility] = useState<boolean>(false)

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        data.url = videoUrl
        data.username = "bullworth.pics"
        data.day = moment(data.day).format("DD/MM/YYYY")
        //console.log(data)
        await updatePost("reel", reel._id, data)
    }

    return (
        <div className="bg-[#262626] rounded border border-solid border-[#383838] 
        flex flex-col sm:flex-col md:flex-row lg:flex-row h-fit sm:h-fit md:h-[80%] lg:h-[80%] w-full sm:w-full md:w-[60%] lg:w-[60%]">
            <div className="w-full sm:w-full md:w-[35%] lg:w-[35%] relative flex justify-center">
                {!isUrlListVisible &&
                    <button
                        onClick={() => setUrlVisibility(true)}
                        className="z-10 absolute top-2 right-2 bg-[#262626] w-6 h-6 rounded-full flex items-center justify-center">
                        <Icon iconName="arrowDown" fill="#fff" size={20} />
                    </button>
                }
                {isUrlListVisible &&
                    <div className="w-[90%] px-4 rounded absolute top-2 z-10 pb-4 bg-[#262626] border border-solid border-[#383838]">
                        <Input
                            defaultValue={reel.url}
                            name="url"
                            placeholder="https://example.com"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setVideoUrl(e.target.value)}
                        />
                        <button
                            onClick={() => setUrlVisibility(false)}
                            className="bg-[#383838] w-6 h-6 rounded-full flex items-center justify-center"
                        >
                            <Icon iconName="arrowUp" fill="#fff" size={20} />
                        </button>
                    </div>
                }
                {videoUrl &&
                    <video
                        controls
                        src={videoUrl}
                        className="w-auto h-full object-cover"
                    />
                }
            </div>
            <div className="w-full sm:w-full md:w-[65%] lg:w-[65%] p-4 border-l border-l-solid border-l-[#383838]">
                <PostFormHeader type="Reel" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Textarea
                        defaultValue={reel.caption}
                        name="caption"
                        register={register}
                        required
                    />
                    <InputDate
                        defaultValue={moment(reel.day, "DD/MM/YYYY").format("YYYY-MM-DD")}
                        label="Day"
                        name="day"
                        register={register}
                        required
                    />
                    <Select
                        inputType="select"
                        defaultValue={reel.hour}
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