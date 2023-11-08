"use client"
import { useState } from "react"

export const AlbumSlide = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }

    return (
        <div className="relative">
            <button
                className="bg-slate-200 text-slate-700 rounded-full w-8 h-8 flex items-center justify-center absolute top-[50%] left-2"
                onClick={goToPrevSlide}
            >
                {"<"}
            </button>
            <img src={images[currentIndex]} alt={`slide-${currentIndex}`} />
            <button
                className="bg-slate-200 text-slate-700 rounded-full w-8 h-8 flex items-center justify-center absolute top-[50%] right-2"
                onClick={goToNextSlide}
            >
                {">"}
            </button>
        </div>
    )
}