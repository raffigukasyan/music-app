import {MusicIcon} from "@/shared/ui/Icons/Icons.tsx";
import {FC} from "react";
import {
    BuildingLibraryIcon,
    HomeIcon,
    MusicalNoteIcon,
    SparklesIcon,
    RadioIcon,
    HeartIcon,
    PlayCircleIcon,
    MicrophoneIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowRightEndOnRectangleIcon,
    ChevronRightIcon, MagnifyingGlassIcon
} from "@heroicons/react/24/outline";



interface IconProps {
    type: string;
    className?: string;
}

export const Icon:FC<IconProps> = ({type, className}) => {
    return {
        'music': <MusicalNoteIcon className={className} />,
        'albums': <MusicIcon className={className} />,
        'library': <BuildingLibraryIcon className={className} />,
        'home': <HomeIcon className={className}/>,
        'sparkles': <SparklesIcon className={className} />,
        'radio': <RadioIcon className={className} />,
        'favorite': <HeartIcon className={className}/>,
        'track': <PlayCircleIcon className={className}/>,
        'podcast': <MicrophoneIcon className={className}/>,
        'arrowLeft': <ArrowLeftIcon className={className} />,
        'arrowRight': <ArrowRightIcon className={className} />,
        'chevron-right': <ChevronRightIcon className={className}/>,
        'search': <MagnifyingGlassIcon className={className} />,
        'logout': <ArrowRightEndOnRectangleIcon className={className}/>
    }[type]
}