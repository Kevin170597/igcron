"use client"
import { useState, ChangeEvent } from "react"
import { ImagesManager } from "./ImagesManager"
import { CreateForm } from "./CreateForm"
import { ResultModal } from "./ResultModal"
import { addPost, uploadImageToGithub } from "@/services"
import { SubmitHandler } from "react-hook-form"
import moment from "moment"

type Inputs = {
    caption: string,
    day: string,
    hour: string,
    username: string,
    urls: string[]
}

export const CreateAlbum = () => {
    const [base64Images, setBase64Images] = useState<string[]>([])
    const [resultModal, setResultModal] = useState<boolean>(false)
    const [saving, setSaving] = useState<boolean>(false)
    const [savingResult, setSavingResult] = useState<string>()

    const handleSetBase64Images = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        if (!files || files.length === 0) return

        const base64Array: string[] = await Promise.all(
            Array.from(files).map(async (file: File) => {
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

    const formatJson = (data: any) => {
        setSavingResult(JSON.stringify(data, null, 2))
    }

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            setResultModal(true)
            setSaving(true)
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
            const res = await addPost("album", data)
            formatJson(res)
            setSaving(false)
        } catch (error) {
            setSaving(false)
            const err = error instanceof Error ? { error: error.message } : error
            formatJson(err)
        }
    }

    return (
        <div className="h-full w-[100%] sm:w-[100%] md:w-[80%] lg:w-[60%] border border-solid border-[#383838] rounded">
            <div className="flex items-center justify-center h-10 bg-[#262626]  border-b border-b-solid border-b-[#383838]">
                <p>Program album</p>
            </div>
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row h-[92%] bg-[#262626]">
                <ImagesManager
                    base64Images={base64Images}
                    handleSetBase64Images={handleSetBase64Images}
                    deleteButton={deleteFromList}
                />
                <CreateForm onSubmit={onSubmit} />
                {resultModal &&
                    <ResultModal
                        saving={saving}
                        savingResult={savingResult}
                        setResultModal={setResultModal}
                        setSavingResult={setSavingResult}
                    />
                }
            </div>
        </div>
    )
}