"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "../atoms"
import { instagramLogin } from "@/services"
import { useUser } from "@/app/AuthProvider"

type Inputs = {
    username: string,
    password: string
}

export const IGLoginForm = () => {
    const { setUserData } = useUser()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        const user = await instagramLogin(data.username, data.password)
        console.log(user)
        setUserData(user)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#262626] rounded border border-solid border-[#383838] py-8 px-8"
        >
            <h2 className="mb-4">Welcome to Instagrapy</h2>
            <Input
                name="username"
                placeholder="Username"
                register={register}
                required
            />
            <Input
                name="password"
                inputType="password"
                placeholder="Password"
                register={register}
                required
            />
            <button
                type="submit"
                className="w-full bg-slate-200 text-sm text-black rounded px-2 mt-auto ml-auto py-2"
            >
                Login
            </button>
        </form>
    )
}