"use client"
import { useState, useRef, ChangeEvent } from "react"
import { AlbumSlide } from "./AlbumSlide"
import { Input, Select, Icon } from "@/components"
import { addAlbum, uploadImageToGithub } from "@/services"
import { useForm, SubmitHandler } from "react-hook-form"
import moment from "moment"

type Inputs = {
    caption: string,
    day: string,
    hour: string,
    username: string,
    urls: string[]
}

export const CreateAlbumForm = () => {
    const [base64Images, setBase64Images] = useState<string[]>([])
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const handleSetBase64Images = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        if (!files || files.length === 0) return
        const base64Array: string[] = await Promise.all(
            Array.from(files).map(async (file) => {
                return new Promise<string>((resolve) => {
                    const reader = new FileReader()
                    reader.onloadend = () => resolve(reader.result as string)
                    reader.readAsDataURL(file)
                })
            })
        )
        setBase64Images([...base64Images, ...base64Array])
    }

    const deleteFromList = (i: number) => {
        setBase64Images(prevImages => prevImages.filter((_, index) => index !== i))
    }

    const addToList = (): void => fileInputRef?.current?.click()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const imagesUrls = await Promise.all(
            base64Images.map(async (image, index) => {
                const res = await uploadImageToGithub(image)
                if (index < base64Images.length - 1) {
                    await new Promise(resolve => setTimeout(resolve, 2000))
                }
                return res
            })
        )
        data.username = "bullworth.pics"
        data.day = moment(data.day).format("DD/MM/YYYY")
        data.urls = imagesUrls
        const res = await addAlbum(data)
        console.log(res)
    }

    return (
        <div className="h-full w-[100%] sm:w-[100%] md:w-[80%] lg:w-[60%] border border-solid border-[#383838] rounded">
            <div className="flex items-center justify-center h-10 bg-[#262626]  border-b border-b-solid border-b-[#383838]">
                <p>Program album</p>
            </div>
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row h-[92%] bg-[#262626]">
                {base64Images.length > 0 &&
                    <div className="w-[100%] sm:w-[100%] md:w-[60%] lg:w-[60%]">
                        <AlbumSlide
                            images={base64Images}
                            deleteButton={deleteFromList}
                            addButton={addToList}
                        />
                    </div>
                }
                <div className={`${base64Images.length > 0 && "hidden"} w-[100%] sm:w-[100%] md:w-[60%] lg:w-[60%] py-6 h-auto flex flex-col gap-4 items-center justify-center`}>
                    <Icon iconName="picture" fill="#c0c0c0" size={60} />
                    <label
                        className="bg-[#0194f6] py-2 px-2 text-sm rounded cursor-pointer"
                        htmlFor="fileInput">
                        Select a file:
                    </label>
                    <input
                        ref={fileInputRef}
                        className="hidden"
                        type="file"
                        accept="image/*"
                        name="fileInput"
                        id="fileInput"
                        multiple
                        onChange={handleSetBase64Images}
                    />
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="sm:w-[100%] md:w-[40%] lg:w-[40%] h-full p-4 border-l border-l-solid border-l-[#383838]">
                    <p className="text-sm ">bullworth.pics</p>
                    <textarea
                        placeholder="Write a caption..."
                        className="w-full bg-inherit text-sm rounded mt-4 focus:outline-none border border-solid border-[#383838] p-2"
                        spellCheck={false}
                        cols={30}
                        rows={5}
                        {...register("caption")}
                    />
                    <div className="flex flex-col mb-2">
                        <label className="mb-2 text-sm ml-1" htmlFor="date">Day</label>
                        <input
                            className="bg-inherit focus:outline-none text-white text-sm border border-solid border-[#383838] rounded p-2"
                            type="date" {...register("day")} />
                    </div>
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