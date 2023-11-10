
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

export const Textarea = ({
    label,
    placeholder,
    register,
    required,
    errors,
    errorMessage,
    name,
    defaultValue
}: Props) => {

    return (
        <div className="flex flex-col">
            <label className="text-text-light-1 dark:text-text-dark-1 pl-1 text-sm">
                {label}
            </label>
            <small className="pl-1 text-[#da2828]">
                {errors && errors[name ? name : ""] ? errorMessage : ""}
            </small>
            <div className="flex items-center rounded border border-solid border-[#383838] dark:border-border-dark mt-3 mb-4" style={errors && errors[name ? name : ""] && { border: "solid 1px red" }}>
                <textarea
                    className="w-full bg-inherit text-sm focus:outline-none px-2 py-1"
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    rows={5}
                    {...register && register(name, { required: required ?? false })}
                />
            </div>
        </div>
    )
}