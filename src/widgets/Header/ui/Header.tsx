import {Search} from "@/features/Search/index.ts";
import {Breadcrumbs} from "@/shared";
import {Settings} from "@/widgets/Header/ui/Settings.tsx";

export const Header = ():JSX.Element => {
    return  (
        <header className={'[grid-column:_span_3] h-fit flex  gap-x-2'}>
            <Breadcrumbs routes={['Artist', 'Top-20']} />
            <Search />
            <Settings />
        </header>
    )
}