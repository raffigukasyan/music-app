export const SectionHead = ({className, head}: {className?: string, head: string}):JSX.Element => {
    return <h4 className={`text-3xl text-myWhite ${className}`}>{head}</h4>
}