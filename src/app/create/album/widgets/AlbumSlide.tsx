"use client"
import { useState } from "react"
import { Icon } from "@/components"

interface Props {
    images: string[],
    deleteButton?: (i: number) => void,
    addButton?: () => void
}

export const AlbumSlide = ({ images, deleteButton, addButton }: Props) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    }

    const deleteFromSlide = () => {
        deleteButton && deleteButton(currentIndex);
        setCurrentIndex(currentIndex === 0 ?
            (images.length <= 2 ? 0 : currentIndex + 1) : currentIndex - 1)
    }

    const addToSlide = () => addButton && addButton()

    return (
        <div className="relative h-full">
            {images.length > 1 &&
                <button
                    className="bg-[#00000057] text-white rounded-full w-8 h-8 flex items-center justify-center absolute top-[50%] left-2"
                    onClick={goToPrevSlide}
                >
                    <Icon iconName="arrowLeft" fill="#fff" size={16} />
                </button>
            }
            <img className="h-full object-cover" src={images[currentIndex]} alt={`slide-${currentIndex}`} />
            {images.length > 1 &&
                <button
                    className="bg-[#00000057] text-white rounded-full w-8 h-8 flex items-center justify-center absolute top-[50%] right-2"
                    onClick={goToNextSlide}
                >
                    <Icon iconName="arrowRight" fill="#fff" size={16} />
                </button>
            }
            <div className="flex gap-1 absolute bottom-2 w-full justify-center">
                {images.map((iamge, i) =>
                    <small
                        key={i}
                        className={`${currentIndex === i ? "bg-blue-500" : "bg-gray-200"} h-2 w-2 rounded-full flex`}></small>
                )}
            </div>
            {
                deleteButton &&
                <button
                    className="absolute top-2 right-2 bg-[#00000057] text-white rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={deleteFromSlide}>
                    <Icon iconName="x" fill="#fff" size={16} />
                </button>
            }
            {
                addButton &&
                <button
                    className="absolute bottom-2 right-2 bg-[#00000057] text-white rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={addToSlide}>
                    <Icon iconName="plus" fill="#fff" size={16} />
                </button>
            }
        </div >
    )
}