import {Icon} from "@/shared/ui/Icon.tsx"
export const Search = ():JSX.Element => {
    return (
        <div className={'py-2 px-5 flex items-center bg-myBlack-200 rounded-2xl '}>
            <Icon type={'search'} className={'min-w-5 min-h-5 text-myWhite'} />
        </div>
    )
}