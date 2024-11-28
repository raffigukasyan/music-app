import {Icon} from "@/shared";

export const FilterName = ({name, isActive=true}: {name: string, isActive?:boolean}):JSX.Element => {
    return (
        <div className={'flex items-center gap-x-2'}>
            <p className={'text-gray-400 text-base'}>{name}</p>
            {isActive && <Icon type={'chevron-down'} className={'w-5 h-5 text-gray-400'} />}
        </div>
    )
}