import {FC, ReactElement} from "react";

interface IIconProps {
    className?: string
}

export const MusicIcon: FC<IIconProps> = ({className}): ReactElement<SVGElement> => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 512 512"
        >
            <g>
                <path
                    d="M256 152c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144-64.6-144-144-144Zm0 272a128 128 0 1 1 128-128 128.144 128.144 0 0 1-128 128Z"
                    fill="currentColor" opacity="1" data-original="currentColor" className=""></path>
                <path
                    d="M456 88h-48V16a8.008 8.008 0 0 0-9.81-7.79l-344 80A7.991 7.991 0 0 0 48 96v400a8 8 0 0 0 8 8h400a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8Zm-64-61.93V88H125.72ZM448 488H64V104h384Z"
                    fill="currentColor" opacity="1" data-original="currentColor" className=""></path>
                <path
                    d="M333.17 209.9a8.019 8.019 0 0 0-6.49-1.79l-96 16A8 8 0 0 0 224 232v92.31a31.705 31.705 0 0 0-16-4.31 32 32 0 1 0 32 32v-81.22l80-13.34v50.87a31.705 31.705 0 0 0-16-4.31 32 32 0 1 0 32 32V216a8.009 8.009 0 0 0-2.83-6.1ZM208 368a16 16 0 1 1 16-16 16.021 16.021 0 0 1-16 16Zm96-16a16 16 0 1 1 16-16 16.021 16.021 0 0 1-16 16Zm16-110.78-80 13.34v-15.78l80-13.34ZM152 168v-40a8 8 0 0 0-8-8H88a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h56a8 8 0 0 0 8-8Zm-16-8H96v-24h40ZM368 432a8 8 0 0 0 0 16h56a8 8 0 0 0 0-16ZM424 456h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z"
                    fill="currentColor" opacity="1" data-original="currentColor" className=""></path>
            </g>
        </svg>
    )
}

export const NextMusic: FC<IIconProps> = ({className}): ReactElement<SVGElement> => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0"
             viewBox="0 0 493.796 493.796"
        >
            <g>
                <path
                    d="M355.938 200.956 81.414 12.128C70.134 4.352 58.402.248 48.358.248c-22.052 0-36.672 18.496-36.672 48.26v397.036c0 14.54 4.228 26.688 10.496 35.144 6.364 8.572 16.32 13.108 27.076 13.108 10.04 0 21.308-4.112 32.584-11.876l274.276-188.828c17.632-12.152 27.3-28.508 27.296-46.076 0-17.56-9.82-33.916-27.476-46.06zM456.446 493.672l-.293-.004c-.048 0-.095.004-.143.004h.436zM455.638 0 444.29.032c-14.86 0-27.724 12.112-27.724 26.992v439.368c0 14.896 12.652 27.124 27.532 27.124l12.055.152c14.805-.079 25.957-12.412 25.957-27.252V26.996C482.11 12.116 470.51 0 455.638 0z"
                    fill="currentColor" opacity="1" data-original="currentColor"></path>
            </g>
        </svg>
    )
}

export const PrevMusic: FC<IIconProps> = ({className}): ReactElement<SVGElement> => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" version="1.1"
             x="0" y="0" viewBox="0 0 493.52 493.52" ><g><path d="M447.126.236c-10.056 0-20.884 4.12-32.148 11.884L140.882 200.952c-17.644 12.152-27.252 28.504-27.252 46.06-.004 17.56 9.78 33.924 27.428 46.076L415.39 481.784c11.284 7.768 22.568 11.736 32.604 11.736h.012c10.76 0 18.916-4.404 25.276-12.972 6.268-8.46 8.688-20.476 8.688-35.012V48.508C481.974 18.74 469.186.236 447.126.236zM53.106.036 39.894 0C25.018 0 11.55 12.112 11.55 26.996v439.42c0 14.884 13.024 27.1 27.908 27.1h.456l12.948-.072c14.88 0 28.092-12.164 28.092-27.048V27.028C80.958 12.144 67.97.036 53.106.036z" fill="currentColor" opacity="1"></path></g></svg>
    )
}

