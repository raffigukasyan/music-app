import {BannerSlider} from "@/widgets/BannerSlider";
import {PopularSongs} from "@/widgets/PopularTracks/ui/PopularSongs.tsx";
import {Albums} from "@/pages/Main/ui/Albums/Albums.tsx";
import 'swiper/css';
export const Main = () => {
       return (
           <section className={''}>
               <BannerSlider />
               <PopularSongs />
               <Albums />
           </section>
       )
}