import {FC, ReactNode} from "react";

import {Provider} from "react-redux";

import {store} from "@/app/store.ts";

interface IProviderProps {
    readonly children: ReactNode;
}

const Providers:FC<IProviderProps> = ({children}) => {
    return (
        <Provider store={store} >
            {children}
        </Provider>
    )
}

export default Providers;