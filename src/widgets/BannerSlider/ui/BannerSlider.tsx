
import {Swiper, SwiperSlide} from "swiper/react";
import {Banner} from "@/entities/Banner";

// @ts-ignore
import 'swiper/css';
export const BannerSlider = ():JSX.Element => {
    return (
        <Swiper className={'w-full h-full'} slidesPerView={1} spaceBetween={10}>
            <SwiperSlide className={'w-full h-full'}>
            <Banner />
            </SwiperSlide>
            <SwiperSlide>
                <Banner />
            </SwiperSlide>
        </Swiper>
    )
}