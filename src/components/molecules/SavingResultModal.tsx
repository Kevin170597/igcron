"use client"
import { Icon } from "../atoms"

export const SavingResutlModal = ({ message, closeModal }: {
    message: string | null,
    closeModal: React.Dispatch<React.SetStateAction<any>>
}) => {

    return (
        <div className="fixed flex items-center justify-center gap-2 text-sm z-30 p-4 top-4 right-4 bg-[#262626] border-l border-l-solid border-l-[#383838] rounded">
            {message}
            <button onClick={closeModal}>
                <Icon iconName="x" fill="#fff" size={20} />
            </button>
        </div>
    )
}