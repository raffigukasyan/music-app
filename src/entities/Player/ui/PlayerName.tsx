import {PreviewImage} from "@/shared/ui/PreviewImage.tsx";
import {SubTitle, Title} from "@/shared";

export const PlayerName = () => {
    return (
        <div className={'flex gap-x-4 items-center'}>
            <PreviewImage src={'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F96f8bb4a817965cb857c1009d076d721.1000x1000x1.png'} />
            <div className={'flex flex-col gap-y-1'}>
                <SubTitle className={'text-sm'}>
                    XCHO
                </SubTitle>
                <Title className={'text-lg font-medium'}>Ты и я</Title>
            </div>
        </div>
    )
}