import {MusicIcon, NextMusic, PrevMusic} from "@/shared/ui/Icons/Icons.tsx";
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
    ChevronRightIcon,
    MagnifyingGlassIcon,
    Squares2X2Icon,
    CogIcon,
    BellIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    PauseIcon,
    PlayIcon
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
        'chevron-down': <ChevronDownIcon className={className} />,
        'chevron-up': <ChevronUpIcon className={className} />,
        'chevron-right': <ChevronRightIcon className={className}/>,
        'search': <MagnifyingGlassIcon className={className} />,
        'logout': <ArrowRightEndOnRectangleIcon className={className}/>,
        'squares': <Squares2X2Icon className={className} />,
        'settings': <CogIcon className={className} />,
        'notificat': <BellIcon className={className} />,
        'next': <NextMusic className={className}/>,
        'prev': <PrevMusic className={className}/>,
        'pause': <PauseIcon className={className} />,
        'play': <PlayIcon className={className} />
    }[type]
}