import {PreviewImage} from "@/entities/Song/ui/PreviewImage.tsx";
import {Icon} from "@/shared/ui/Icon.tsx";

export const TopItem = ():JSX.Element => {
    return  (
        <div>
            <div>
                <PreviewImage src={}/>
                <p>AAA BBB</p>
            </div>
            <p>
                Album
            </p>
            <span>3:31</span>
            <Icon type={} />
        </div>
    )
}