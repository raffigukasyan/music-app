import {Skeleton} from "@/shared";

export const SkeletonList = ():JSX.Element => {
    return (
            <div className={'flex flex-col gap-y-3'}>
                { Array.from({length: 10}).map((el:unknown, idx:number) => (
                    <Skeleton key={'key'+ idx} className={'grid grid-cols-4 gap-x-10 items-center'}>
                        <div className={'flex flex-1 items-center gap-x-5'}>
                            <div className={'w-12 h-12 rounded-xl bg-slate-700'}></div>
                            <div className={'max-w-32 w-full h-2 bg-slate-700'}></div>
                        </div>
                        <div className={'h-3 bg-slate-700'}></div>
                        <div className={'h-3 bg-slate-700'}></div>
                        <div className={'h-3 bg-slate-700'}></div>
                    </Skeleton>
                ))}
            </div>
    )
}