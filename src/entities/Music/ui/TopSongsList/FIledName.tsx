export const FiledName = ({className, name}:{name: string, className?: string}) => {
    return (
        <p className={`text-base text-myWhite ${className}`}>{name}</p>
    )
}