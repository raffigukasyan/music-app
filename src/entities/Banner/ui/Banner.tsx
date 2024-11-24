import {BannerInfo} from "@/entities/Banner/ui/BannerInfo.tsx";

export const Banner = ():JSX.Element => {
    return  (
        <div className={'relative w-full rounded-3xl h-[400px]'}>
            <img className={'absolute w-full h-full object-cover rounded-3xl'} src="https://cdn-images.dzcdn.net/images/cover/2094268ed262f8ec7eb54ad8fac60a07/1900x1900-000000-80-0-0.jpg" alt=""/>
            <BannerInfo title={'Macan'} description={'Альбом I AM преодолел отметку в 10 млн. прослушиваний'} />
        </div>
    )
}