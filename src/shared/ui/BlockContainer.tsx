export const BlockContainer = ({children, className}: {children?: JSX.Element[] | JSX.Element | string, className: string }):JSX.Element => {
    return (
        <div className={`bg-[#22252B] py-3 px-5 rounded-2xl ${className}`}>
            {children}
        </div>
    )
}