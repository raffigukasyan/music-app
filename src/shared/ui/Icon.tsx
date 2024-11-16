import {MusicIcon} from "@/shared/ui/Icons/Icons.tsx";
import {FC} from "react";
import {
    BuildingLibraryIcon,
    HomeIcon,
    MusicalNoteIcon,
    SparklesIcon,
    RadioIcon,
    HeartIcon, PlayCircleIcon, MicrophoneIcon
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
        'podcast': <MicrophoneIcon className={className}/>
    }[type]
}