import {Swiper, SwiperSlide} from "swiper/react";
import {AlbumCard} from "@/entities/Album";

export const AlbumsSilder = ():JSX.Element => {
    return  (
        <Swiper className={'h-full'} slidesPerView={'auto'} spaceBetween={20} >
            <SwiperSlide className={'max-w-[280px] !w-auto'}>
                <AlbumCard name={'Xcho'} artist={'Xcho'} preview={{src: 'https://avatars.yandex.net/get-music-content/5587254/c0278ebc.a.20561643-1/m1000x1000', alt: 'Hajime'}} />
             </SwiperSlide>
            <SwiperSlide className={'max-w-[280px] !w-auto'}>
                <AlbumCard name={'Xcho'} artist={'Xcho'} preview={{src: 'https://avatars.yandex.net/get-music-content/5587254/c0278ebc.a.20561643-1/m1000x1000', alt: 'Hajime'}} />
            </SwiperSlide>
            <SwiperSlide className={'max-w-[280px] !w-auto'}>
                <AlbumCard name={'Xcho'} artist={'Xcho'} preview={{src: 'https://avatars.yandex.net/get-music-content/5587254/c0278ebc.a.20561643-1/m1000x1000', alt: 'Hajime'}} />
            </SwiperSlide>
            <SwiperSlide className={'max-w-[280px] !w-auto'}>
                <AlbumCard name={'Xcho'} artist={'Xcho'} preview={{src: 'https://avatars.yandex.net/get-music-content/5587254/c0278ebc.a.20561643-1/m1000x1000', alt: 'Hajime'}} />
            </SwiperSlide>
            <SwiperSlide className={'max-w-[280px] !w-auto'}>
                <AlbumCard name={'Xcho'} artist={'Xcho'} preview={{src: 'https://avatars.yandex.net/get-music-content/5587254/c0278ebc.a.20561643-1/m1000x1000', alt: 'Hajime'}} />
            </SwiperSlide>
        </Swiper>
    )
}