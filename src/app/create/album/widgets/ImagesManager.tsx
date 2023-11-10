"use client"
import { ChangeEvent, useRef } from "react";
import { AlbumSlide } from "./AlbumSlide";
import { Icon } from "@/components";

interface Props {
    base64Images: string[],
    handleSetBase64Images: (event: ChangeEvent<HTMLInputElement>) => void
    deleteButton: (index: number) => void
}

export const ImagesManager = ({
    base64Images,
    handleSetBase64Images,
    deleteButton
}: Props) => {
    const fileInputRef = useRef<HTMLInputElement>(null)

    const addToList = (): void => fileInputRef?.current?.click()

    return (
        <>
            {base64Images.length > 0 &&
                <div className="w-[100%] sm:w-[100%] md:w-[60%] lg:w-[60%]">
                    <AlbumSlide
                        images={base64Images}
                        addButton={addToList}
                        deleteButton={deleteButton}
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
        </>
    )
}