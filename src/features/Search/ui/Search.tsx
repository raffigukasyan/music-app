import {Icon} from "@/shared/ui/Icon.tsx"
import {Input} from "@/shared/index.ts";
import {useState} from "react";
export const Search = ():JSX.Element => {
    const [searchValue, setSearchValue] = useState<string>('')
    return (
        <div className={'w-full py-4 px-5 flex gap-x-2 items-center bg-myBlack-200 rounded-2xl '}>
            <Icon type={'search'} className={'w-6 h-6 text-myWhite'} />
            <Input placeholder={'Search...'} value={searchValue} onChange={(val:React.ChangeEvent<HTMLInputElement>) => setSearchValue(val.target.value)} />
        </div>
    )
}