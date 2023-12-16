"use client"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Input, Icon } from "../atoms"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from "next/image"

type Inputs = {
    username: string,
    password: string
}

export const IGLoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoading(true)
        //console.log(data)
        const responseNextAuth = await signIn("credentials", {
            username: data.username, password: data.password, redirect: false
        })

        console.log(25, responseNextAuth)
        if (responseNextAuth?.error) {
            console.log(responseNextAuth.error.split(","))
            setError(responseNextAuth.error)
            setLoading(false)
            return
        }
        router.push("/scheduled/posts/album")
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#262626] rounded border border-solid border-[#383838] py-8 px-8"
        >
            <Image 
                src={"/favicon.png"} 
                alt="logo"
                width={80}
                height={80}
                className="mx-auto mb-4"
            />
            <h2 className="mb-4 text-center">Welcome to Instagrapy</h2>
            <Input
                name="username"
                placeholder="Username"
                register={register}
                required
                errors={errors}
            />
            <Input
                name="password"
                inputType="password"
                placeholder="Password"
                register={register}
                required
                errors={errors}
            />
            {error &&
                <p className="text-[#e3c0c0] text-sm mb-4 bg-[#5e2e2e] text-center rounded py-2 border border-solid border-[#9b2c2c]">
                    {error}
                </p>
            }
            <button
                type="submit"
                className="w-full flex items-center justify-center bg-slate-200 text-sm text-black rounded px-2 mt-auto ml-auto py-2"
            >
                {loading ? (
                    <Icon iconName="spin" fill="#000" />
                ) : (
                    "Login"
                )}
            </button>
        </form>
    )
}