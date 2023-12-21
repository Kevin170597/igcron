"use client"
import { useState, ChangeEvent } from "react"
import { Icon, Input } from "../atoms"

export const URLController = ({ setUrl, url }: {
    setUrl: React.Dispatch<React.SetStateAction<string>>,
    url?: string
}) => {
    const [isUrlVisible, setUrlVisibility] = useState<boolean>(false)

    return (
        <>
            {!isUrlVisible &&
                <button
                    onClick={() => setUrlVisibility(true)}
                    className="z-10 absolute top-2 right-2 bg-[#262626] w-6 h-6 rounded-full flex items-center justify-center">
                    <Icon iconName="arrowDown" fill="#fff" size={20} />
                </button>
            }
            {isUrlVisible &&
                <div className="w-[90%] px-4 rounded absolute top-2 z-10 pb-4 bg-[#262626] border border-solid border-[#383838]">
                    <Input
                        defaultValue={url}
                        name="url"
                        placeholder="https://example.com"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
                    />
                    <button
                        onClick={() => setUrlVisibility(false)}
                        className="bg-[#383838] w-6 h-6 rounded-full flex items-center justify-center"
                    >
                        <Icon iconName="arrowUp" fill="#fff" size={20} />
                    </button>
                </div>
            }
        </>
    )
}