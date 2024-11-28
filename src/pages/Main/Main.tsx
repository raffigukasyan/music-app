import {BannerSlider} from "@/widgets/BannerSlider";
import {TopSongs} from "@/pages/Main/ui/TopSongs/TopSongs.tsx";

export const Main = () => {
       return (
           <section className={'max-w-full'}>
               <BannerSlider />
               <TopSongs />
           </section>
       )
}