import {Swiper, SwiperSlide} from "swiper/react";

import {AlbumCard} from "@/entities/Album";
import {IAlbumList} from "@/entities/Album/model/types.ts";
import {SliderItem} from "@/shared/ui/SliderItem.tsx";
import {setSelectedPlaylist} from "@/widgets/SelectPlaylist";

export const SliderList = ({list, Component}):JSX.Element => {
    return (
        <Swiper className={'h-full'} slidesPerView={'auto'} spaceBetween={20}>
            {list.map((item) => {
                return <SliderItem item={item} />
            })}
        </Swiper>
    )
}