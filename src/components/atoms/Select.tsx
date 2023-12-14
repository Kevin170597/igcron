interface Props {
    inputType?: string,
    label?: string,
    register?: any,
    required?: boolean,
    name?: string,
    defaultValue?: string,
    options?: { optionValue: string | number, optionLabel: string }[]
}

export const Select = (props: Props) => {
    const { label, name, defaultValue, register, required, options } = props

    return (
        <div className="flex flex-col">
            <label className="text-text-light-1 dark:text-text-dark-1 pl-1 text-sm">
                {label}
            </label>
            <div className="flex items-center border border-[#383838] dark:border-border-dark rounded h-10 px-2 mt-3 mb-4">
                <select
                    name={name}
                    defaultValue={defaultValue}
                    className="w-full text-text-light-1 dark:text-text-dark-1 bg-inherit px-2 text-sm focus:outline-none"
                    {...register && register(name, { required: required ?? false })}>
                    {
                        options?.map((option, index) => (
                            <option
                                className="bg-bg-white text-black dark:bg-bg-dark-1"
                                key={index}
                                value={option?.optionValue}>
                                {option?.optionLabel}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div >
    )
}