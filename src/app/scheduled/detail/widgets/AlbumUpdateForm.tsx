"use client"
import { Select, Input } from "@/components"
import { useForm, SubmitHandler } from "react-hook-form"
import { PostInterface } from "@/interfaces"
import { updateAlbum } from "@/services"

type Inputs = {
    caption: string,
    hour: string
}

export const AlbumUpdateForm = ({ album }: { album: PostInterface }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        await updateAlbum(album._id, data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
            <textarea className="text-sm w-full border border-solid border-[#383838] rounded bg-inherit p-2 focus:outline-none"
                cols={20}
                rows={5}
                defaultValue={album.caption}
            />
            <Input
                inputType="text"
                label="Day"
                name="day"
                required
                errors={errors}
                errorMessage="Complete day field."
                register={register}
                defaultValue={album.day}
            />
            <Select
                label="Hour"
                inputType="select"
                name="hour"
                required
                register={register}
                options={[{ optionLabel: "16:00", optionValue: "16:00" }, { optionLabel: "19:00", optionValue: "19:00" }]}
                defaultValue={album.hour}
            />
            <button className="text-sm bg-slate-200 text-slate-700 rounded p-2">Save changes</button>
        </form>
    )
}
