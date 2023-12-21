"use client"
import { useState } from "react"
import { Icon } from "../atoms"

export const RenderMedia = ({ type, image, video, combined }: { type: string, image?: string, video?: string, combined?: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const nexImage = () => {
        if (combined) setCurrentIndex((prevIndex) => (prevIndex + 1) % combined.length)
    }

    const prevImage = () => {
        if (combined) setCurrentIndex((prevIndex) => prevIndex === 0 ? combined.length - 1 : prevIndex - 1)
    }

    return (
        <>
            {image && type === "photo" &&
                <img
                    src={image}
                    alt="photo image"
                    className="w-auto h-full object-cover"
                />
            }
            {image && type === "story" &&
                <img
                    src={image}
                    alt="story image"
                    className="w-auto h-full object-cover"
                />
            }
            {image && type === "reel" &&
                <video
                    controls
                    src={video}
                    className="w-auto h-full object-cover"
                />
            }
            {combined && type === "album" &&
                <div>
                    {combined && combined[currentIndex] && combined[currentIndex].slice(-3) === "jpg" &&
                        <img
                            src={combined[currentIndex]}
                            alt="story image"
                            className="w-auto h-full object-cover"
                        />
                    }
                    {combined && combined[currentIndex] && combined[currentIndex].slice(-3) === "mp4" &&
                        <video
                            src={combined[currentIndex]}
                            controls
                            className="w-auto h-full object-cover"
                        />
                    }
                    <button
                        className="absolute top-[50%] left-2 w-6 h-6 rounded-full flex items-center justify-center bg-[#383838]"
                        onClick={prevImage}>
                        <Icon iconName="arrowLeft" fill="#fff" size={20} />
                    </button>
                    <button
                        className="absolute top-[50%] right-2 w-6 h-6 rounded-full flex items-center justify-center bg-[#383838]"
                        onClick={nexImage}>
                        <Icon iconName="arrowRight" fill="#fff" size={20} />
                    </button>
                </div>
            }
        </>
    )
}