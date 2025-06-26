import {Variants} from "framer-motion";


export const variantsElement:Variants = {
    visibility: {opacity: 1, display: 'flex'},
    hidden: {opacity: 0, display: 'none'}
}

export const variantsItem:Variants = {
    visibility: {width: '12rem', transition: {
            when: "beforeChildren",
        }},
    hidden:  {width: '3.5rem', transition: {
            when: "afterChildren",
        }}
}