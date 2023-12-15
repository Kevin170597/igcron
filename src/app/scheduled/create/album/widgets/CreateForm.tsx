"use client"
import { Select, Textarea, InputDate } from "@/components"
import { useForm } from "react-hook-form"

type Inputs = {
    caption: string,
    day: string,
    hour: string,
    username: string,
    urls: string[]
}

export const CreateForm = ({ onSubmit }: { onSubmit: any }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="sm:w-[100%] md:w-[40%] lg:w-[40%] h-full p-4 border-l border-l-solid border-l-[#383838]"
        >
            <p className="text-sm ">bullworth.pics</p>
            <Textarea
                name="caption"
                required
                register={register}
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
    )
}