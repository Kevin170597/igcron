"use client"
import { useState, ChangeEvent } from "react"
import { Icon, Input } from "../atoms"

export const URLSController = ({ items, setItems }: { items: string[], setItems: React.Dispatch<React.SetStateAction<string[]>> }) => {
    const [isUrlsVisible, setUrlsVisibility] = useState<boolean>(false)

    const addInput = () => {
        setItems([...items, ""])
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


    return (
        <>
            {!isUrlsVisible &&
                    <button
                        onClick={() => setUrlsVisibility(true)}
                        className="z-10 absolute top-2 right-2 bg-[#262626] w-6 h-6 rounded-full flex items-center justify-center">
                        <Icon iconName="arrowDown" fill="#fff" size={20} />
                    </button>
                }
            {isUrlsVisible && (
                <div className="w-[90%] z-10 max-h-full overflow-auto px-4 pb-4 rounded absolute top-2 bg-[#262626] border border-solid border-[#383838]">
                    {items.map((item: string, i: number) => (
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
                    ))}
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
            )}
        </>
    )
}