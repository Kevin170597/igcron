interface Props {
    label?: string,
    inputType?: string,
    placeholder?: string,
    register?: any,
    required?: boolean,
    errors?: any,
    errorMessage?: string,
    name?: string,
    defaultValue?: string
}

export const Input = (props: Props) => {
    const { label, inputType, placeholder, register, required, errors, errorMessage, name, defaultValue } = props

    return (
        <div className="flex flex-col">
            <label className="text-text-light-1 dark:text-text-dark-1 pl-1 text-sm">
                {label}
            </label>
            <small className="pl-1 text-[#da2828]">
                {errors && errors[name ? name : ""] ? errorMessage : ""}
            </small>
            <div className="flex items-center rounded border border-solid border-[#383838] dark:border-border-dark px-2 mt-3 mb-4" style={errors && errors[name ? name : ""] && { border: "solid 1px red" }}>
                <input
                    className="text-text-light-1 dark:text-text-dark-1 w-full px-2 rounded h-10 bg-inherit text-sm focus:outline-none placeholder:text-font-white-2"
                    type={inputType ?? "text"}
                    placeholder={placeholder ?? ""}
                    defaultValue={defaultValue}
                    {...register && register(name, { required: required ?? false })}
                />
            </div>
        </div>
    )
}