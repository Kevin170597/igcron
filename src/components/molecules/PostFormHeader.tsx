
export const PostFormHeader = ({ type }: { type: string }) => {

    return (
        <div className="flex items-center gap-2 mb-6">
            <img
                src="https://raw.githubusercontent.com/Kevin170597/my-drive/main/bully.jpg"
                alt="profile"
                className="w-6 h-6 rounded-full"
            />
            <p className="text-sm">bullworth.pics</p>
            <p className="text-sm ml-auto text-[#47a797] bg-[#383838] px-2 py-1 rounded">
                New {type}
            </p>
        </div>
    )
}