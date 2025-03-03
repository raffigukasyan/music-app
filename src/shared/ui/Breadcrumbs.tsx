import {Icon} from "./Icon"
export const Breadcrumbs = ({routes}: {routes: string[]}):JSX.Element => {
    return (
        <div className={'flex flex-shrink-0 gap-x-3 items-center bg-[#22252B] py-4 px-5 rounded-2xl'}>
            {routes.map((route:string, idx: number) => {
                return (
                    <div key={route+idx} className={'flex items-center gap-x-3'}>
                        <span className={'text-gray-200'}>{route}</span>
                        {idx !== routes.length-1 ? <Icon type={'chevron-right'} className={'w-4 h-4 stroke-slate-300'} /> : ''}
                    </div>
                )
            })}
        </div>
    )
}
