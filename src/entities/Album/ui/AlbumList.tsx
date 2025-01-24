8import {Swiper, SwiperSlide} from "swiper/react";
import {AlbumCard} from "@/entities/Album";

import {IAlbumList} from "@/entities/Album/model/types.ts";
import {useDispatch} from "react-redux";
import {setSelectedPlaylist} from "@/widgets/SelectPlaylist";

export const AlbumList = ({albums}: {albums: IAlbumList[]}):JSX.Element => {
    const dispatch = useDispatch();


    return  (
        <Swiper className={'h-full'} slidesPerView={'auto'} spaceBetween={20}>
            {
                albums.map((album:IAlbumList) => (
                    <SwiperSlide className={'max-w-[280px] !w-auto'}>
                        <AlbumCard name={album.name} artist={album.artist} preview={{src: album.image, alt: album.name}} onClick={() => dispatch(setSelectedPlaylist(album))} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}