interface IInputProps  {
    value?: string,
    className?: string,
    placeholder: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
}

export const Input = ({value, placeholder,  className, onChange}:IInputProps):JSX.Element => {
    return (
        <input type={'text'} placeholder={placeholder} className={`border-none bg-transparent placeholder:border-none focus:outline-0 text-lg text-gray-300  ${className}`} value={value ?? ''} onChange={onChange} />
    )
}