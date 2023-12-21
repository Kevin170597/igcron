"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { InputDate, Select, Textarea } from "../atoms"
import { PostFormHeader, URLController, URLSController, RenderMedia } from "../molecules"
import { useState, useEffect } from "react"
import { addPost, getPost } from "@/services"
import moment from "moment"
import { useSession } from "next-auth/react"
import { PostInterface } from "@/interfaces"

type PostType = "album" | "photo" | "story" | "reel"

type Inputs = {
    caption: string,
    day: string,
    hour: string,
    username: string,
    urls?: string[],
    url?: string
}

export const UpdatePostForm = ({ type, id }: { type: PostType, id: string }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const { data: session } = useSession()

    const [post, setPost] = useState<PostInterface | null>(null)
    const [url, setUrl] = useState<string>(post?.url || "")
    const [items, setItems] = useState<string[]>(post?.urls || [""])

    useEffect(() => {
        const fetchPost = async () => {
            if (session && session.user) {
                const post = await getPost(type, session.user.username, session.user.token, id)
                setPost(post)
                if (type === "album") setItems(post.urls)
                else setUrl(post.url)
            }
        }
        fetchPost()
    }, [session])

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        type === "album" ? data.urls = items : data.url = url
        data.username = session?.user.username as string
        data.day = moment(data.day).format("DD/MM/YYYY")
        //console.log(data)
        await addPost(type, data)
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
                        <URLController setUrl={setUrl} url={url} />
                        <RenderMedia type={type} image={url} />
                    </>
                )}
            </div>
            <div className={`p-4 border-l border-l-solid border-l-[#383838] w-full sm:w-full
                ${(type === "album" || type === "photo") && "md:w-[50%] lg:w-[50%]"} 
                ${(type === "story" || type === "reel") && "md:w-[65%] lg:w-[65%]"}`}
            >
                <PostFormHeader type={type} />
                {post &&
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {type !== "story" &&
                            <Textarea
                                defaultValue={post?.caption}
                                name="caption"
                                register={register}
                                required
                            />
                        }
                        <InputDate
                            defaultValue={moment(post?.day, "DD/MM/YYYY").format("YYYY-MM-DD")}
                            label="Day"
                            name="day"
                            register={register}
                            required
                        />
                        <Select
                            defaultValue={post?.hour}
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
                }
            </div>
        </div>
    )
}