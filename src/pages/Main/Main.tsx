import {BannerSlider} from "@/widgets/BannerSlider";
import {Popular} from "@/widgets/PopularMusic/ui/Popular.tsx";
import {Albums} from "@/pages/Main/ui/Albums/Albums.tsx";
import 'swiper/css';
export const Main = () => {
       return (
           <section className={''}>
               <BannerSlider />
               <Popular />
               <Albums />
           </section>
       )
}