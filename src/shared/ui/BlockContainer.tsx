export const BlockContainer = ({children, className}: {children?: JSX.Element[] | JSX.Element | string, className: string }):JSX.Element => {
    return (
        <div className={`flex flex-shrink-0 gap-x-3 items-center bg-[#22252B] py-3 px-5 rounded-2xl ${className}`}>
            {children}
        </div>
    )
}