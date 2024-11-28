import {FilterName} from "@/features/FilterPopularSongs/ui/FilterName.tsx";

export const Filter = ():JSX.Element => {
    return (
        <div className={'grid grid-cols-[50px_2fr_2fr_1fr_50px] items-start mb-5'}>
            <FilterName name={'#'} isActive={false}/>
            <FilterName name={'Artist'} />
            <FilterName name={'Album'} />
        </div>
    )
}