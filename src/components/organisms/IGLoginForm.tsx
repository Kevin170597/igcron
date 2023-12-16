"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "../atoms"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

type Inputs = {
    username: string,
    password: string
}

export const IGLoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const router = useRouter()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        //console.log(data)
        const responseNextAuth = await signIn("credentials", {
            username: data.username, password: data.password, redirect: false
        })

        console.log(25, responseNextAuth)

        if (responseNextAuth?.error) {
            console.log(responseNextAuth.error.split(","))
            return
        }
        router.push("/scheduled/posts/album")
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