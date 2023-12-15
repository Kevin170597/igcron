"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { Input, InputDate, Select, Textarea } from "../atoms"
import { useState, ChangeEvent } from "react"
import { addPost } from "@/services"
import moment from "moment"
import { Icon } from "../atoms"

type Inputs = {
    caption: string,
    day: string,
    hour: string,
    username: string,
    urls: string[]
}

export const CreateAlbumForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [items, setItems] = useState<string[]>([''])
    const [isUrlsListVisible, setUrlsVisibility] = useState<boolean>(true)

    const addInput = () => {
        setItems([...items, ''])
    }

    const deleteInput = (i: number) => {
        setItems([...items.slice(0, i), ...items.slice(i + 1)])
    }

    const setItem = (i: number, item: string) => {
        setItems((prev) => {
            const newItems = [...prev]
            newItems[i] = item
            return newItems
        })
    }

    const nexImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? items.length - 1 : prevIndex - 1)
    }

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        data.urls = items
        data.username = "bullworth.pics"
        data.day = moment(data.day).format("DD/MM/YYYY")
        console.log(data)
        await addPost("photo", data)
    }

    return (
        <div className="bg-[#262626] rounded border border-solid border-[#383838] flex h-[80%] w-[60%]">
            <div className="w-[50%] relative flex justify-center">
                {!isUrlsListVisible &&
                    <button
                        onClick={() => setUrlsVisibility(true)}
                        className="z-10 absolute top-2 right-2 bg-[#262626] w-6 h-6 rounded-full flex items-center justify-center">
                        <Icon iconName="arrowDown" fill="#fff" size={20} />
                    </button>
                }
                {isUrlsListVisible &&
                    <div className="w-[90%] z-10 max-h-full overflow-auto px-4 pb-4 rounded absolute top-2 bg-[#262626] border border-solid border-[#383838]">
                        {items.map((item: string, i: number) =>
                            <div key={i} className="flex gap-2 items-center">
                                <Input
                                    name="url"
                                    defaultValue={item}
                                    placeholder="https://example.com"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setItem(i, e.target.value)}
                                />
                                <button
                                    className="w-6 h-6 rounded-full flex items-center justify-center"
                                    onClick={() => deleteInput(i)}
                                >
                                    <Icon iconName="x" fill="#fff" size={18} />
                                </button>
                            </div>
                        )}
                        <div className="flex gap-2">
                            <button
                                onClick={addInput}
                                className="bg-[#383838] w-6 h-6 rounded-full flex items-center justify-center"
                            >
                                <Icon iconName="plus" fill="#fff" size={20} />
                            </button>
                            <button
                                onClick={() => setUrlsVisibility(false)}
                                className="bg-[#383838] w-6 h-6 rounded-full flex items-center justify-center"
                            >
                                <Icon iconName="arrowUp" fill="#fff" size={20} />
                            </button>
                        </div>
                    </div>
                }
                {items && items[0] &&
                    <div>
                        {items && items[currentIndex] && items[currentIndex].slice(-3) === 'jpg' ?
                            <img
                                src={items[currentIndex]}
                                alt="story image"
                                className="w-auto h-full object-cover"
                            />
                            :
                            <video
                                src={items[currentIndex]}
                                controls
                                className="w-auto h-full object-cover"
                            />
                        }
                        <button
                            className="absolute top-[50%] left-2 w-6 h-6 rounded-full flex items-center justify-center bg-[#383838]"
                            onClick={prevImage}>
                            <Icon iconName="arrowLeft" fill="#fff" size={20} />
                        </button>
                        <button
                            className="absolute top-[50%] right-2 w-6 h-6 rounded-full flex items-center justify-center bg-[#383838]"
                            onClick={nexImage}>
                            <Icon iconName="arrowRight" fill="#fff" size={20} />
                        </button>
                    </div>
                }
            </div>
            <div className="w-[50%] p-4 border-l border-l-solid border-l-[#383838]">
                <div className="flex items-center gap-2 mb-6">
                    <img
                        src="https://raw.githubusercontent.com/Kevin170597/my-drive/main/bully.jpg"
                        alt="profile"
                        className="w-6 h-6 rounded-full"
                    />
                    <p className="text-sm">bullworth.pics</p>
                </div>
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