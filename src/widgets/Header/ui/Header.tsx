import {Breadcrumbs} from "@/shared";
import {Search} from "@/features/Search/index.ts";
import {Settings} from "@/widgets/Header/ui/Settings.tsx";

export const Header = ():JSX.Element => {
    return  (
        <header className={'flex  gap-x-2'}>
            <Breadcrumbs routes={['Artist', 'Top-20']} />
            <Search />
            <Settings />
        </header>
    )
}