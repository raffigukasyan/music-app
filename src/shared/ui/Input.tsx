interface IInputProps  {
    value: string,
    className: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
}

export const Input = ({value, className, onChange}:IInputProps):JSX.Element => {
    return (
        <input className={className} type="text" value={value} onChange={onChange} />
    )
}