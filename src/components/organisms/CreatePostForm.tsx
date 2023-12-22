"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { InputDate, Select, Textarea, Icon } from "../atoms"
import { PostFormHeader, URLController, URLSController, RenderMedia } from "../molecules"
import { useState } from "react"
import { addPost } from "@/services"
import moment from "moment"
import { useSession } from "next-auth/react"

type PostType = "album" | "photo" | "story" | "reel"

type Inputs = {
    caption: string,
    day: string,
    hour: string,
    username: string,
    urls?: string[],
    url?: string
}

export const CreatePostForm = ({ type }: { type: PostType }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const { data: session } = useSession()

    const [url, setUrl] = useState<string>("")
    const [items, setItems] = useState<string[]>([""])

    const [saving, setSaving] = useState<boolean>(false)
    const [savingResult, setSavingResult] = useState<string | null>(null)

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setSaving(true)
        type === "album" ? data.urls = items : data.url = url
        data.username = session?.user.username as string
        data.day = moment(data.day).format("DD/MM/YYYY")
        //console.log(data)
        const response = await addPost(type, data, session?.user.token as string)
        if (response.error || response._id) setSavingResult(response.error || response._id)
        setSaving(false)
    }

    return (
        <div className="bg-[#262626] rounded border border-solid border-[#383838] 
            flex flex-col sm:flex-col md:flex-row lg:flex-row h-fit sm:h-fit md:h-[80%] lg:h-[80%] w-full sm:w-full md:w-[60%] lg:w-[60%]"
        >
            <div className={`relative flex justify-center w-full sm:w-full h-[72vh]
                ${(type === "album" || type === "photo") && "md:w-[50%] lg:w-[50%]"} 
                ${(type === "story" || type === "reel") && "md:w-[35%] lg:w-[35%]"}`}
            >
                {type === "album" ? (
                    <>
                        <URLSController items={items} setItems={setItems} />
                        <RenderMedia type={type} combined={items} />
                    </>
                ) : (
                    <>
                        <URLController setUrl={setUrl} />
                        <RenderMedia type={type} image={url} />
                    </>
                )}
            </div>
            <div className={`p-4 border-l border-l-solid border-l-[#383838] w-full sm:w-full
                ${(type === "album" || type === "photo") && "md:w-[50%] lg:w-[50%]"} 
                ${(type === "story" || type === "reel") && "md:w-[65%] lg:w-[65%]"}`}
            >
                <PostFormHeader type={type} />
                <form onSubmit={handleSubmit(onSubmit)}>
                    {type !== "story" &&
                        <Textarea
                            name="caption"
                            register={register}
                            required
                        />
                    }
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
                        className="bg-slate-200 text-sm text-black rounded px-2 mt-auto ml-auto py-2"
                    >
                        {saving ? (
                            <Icon iconName="spin" fill="#000" />
                        ) : (
                            "Save"
                        )}
                    </button>
                    {savingResult &&
                        <div className="fixed flex items-center justify-center gap-2 text-sm z-30 p-4 top-4 right-4 bg-[#262626] border-l border-l-solid border-l-[#383838] rounded">
                            {savingResult}
                            <button onClick={() => setSavingResult(null)}>
                                <Icon iconName="x" fill="#fff" size={20} />
                            </button>
                        </div>}
                </form>
            </div>
        </div>
    )
}