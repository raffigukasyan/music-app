import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Banner } from "@/entities/Banner";
// @ts-ignore
export const BannerSlider = (): JSX.Element => {
  return (
    <Swiper
      className={"w-full h-full mb-10"}
      slidesPerView={1}
      spaceBetween={10}
      loop
      speed={900}
      modules={[Autoplay]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide className={"w-full h-full"}>
        <Banner />
      </SwiperSlide>
      <SwiperSlide>
        <Banner />
      </SwiperSlide>
    </Swiper>
  );
};
