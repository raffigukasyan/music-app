import {BlockContainer} from "@/shared/ui/BlockContainer.tsx";
import {Icon} from "@/shared/ui/Icon.tsx";
import {MyAccount} from "@/widgets/Header/ui/MyAccount.tsx";

export const Settings = ():JSX.Element => {
    return (
        <BlockContainer className={'gap-x-6'}>
            <Icon type={'squares'} className={'w-6 h-6 text-gray-300'} />
            <Icon type={'settings'} className={'w-6 h-6 text-gray-300'} />
            <Icon type={'notificat'} className={'w-6 h-6 text-gray-300'} />
            <div className={'w-[1px] h-4/5 bg-gray-300'}></div>
            <MyAccount />
        </BlockContainer>
    )
}