import { FC } from "react";

import { SectionHead } from "@/shared";
import { AlbumsSlider } from "@/widgets/AlbumsSlider";

export const Albums: FC = (): JSX.Element => {
  return (
    <section>
      <SectionHead className={"mb-10"} head={"Албомы"} />
      <AlbumsSlider />
    </section>
  );
};
