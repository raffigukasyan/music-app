import {BannerSlider} from "@/widgets/BannerSlider";
import {PopularSongs} from "@/pages/Main/ui/PopularSongs/PopularSongs.tsx";

export const Main = () => {
       return (
           <section className={'max-w-full'}>
               <BannerSlider />
               <PopularSongs />
           </section>
       )
}