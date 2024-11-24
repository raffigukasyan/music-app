import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";
import {Banner} from "@/entities/Banner";
export const BannerSlider = ():JSX.Element => {
    return (
        <Swiper className={'w-full'} slidesPerView={1}>
            <SwiperSlide>
                <Banner />
            </SwiperSlide>
            <SwiperSlide>
                <Banner />
            </SwiperSlide>
        </Swiper>
    )
}