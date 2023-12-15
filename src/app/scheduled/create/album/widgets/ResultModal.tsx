"use client"
import { Icon } from "@/components"

interface ResultModalProps {
    saving: boolean
    savingResult?: string
    setResultModal: React.Dispatch<React.SetStateAction<boolean>>
    setSavingResult: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const ResultModal = ({
    saving,
    savingResult,
    setResultModal,
    setSavingResult
}: ResultModalProps) => {
    return (
        <div className="max-w-[50%] flex items-center text-xs gap-1 fixed bottom-8 right-8 bg-[#262626] p-4 rounded z-50 border border-solid border-[#383838]">
            {saving &&
                <p className="mr-8">Loading...</p>
            }
            <pre className="w-full overflow-hidden text-ellipsis">
                {savingResult}
            </pre>
            <button
                className="flex items-center justify-center ml-2 absolute bg-[#383838] w-8 h-8 rounded-full top-2 right-2"
                onClick={() => { setResultModal(false), setSavingResult("") }}
            >
                <Icon iconName="x" fill="#fff" size={16} />
            </button>
        </div>
    )
}