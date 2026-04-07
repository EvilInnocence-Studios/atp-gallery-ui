import { overridable } from "@core/lib/overridable";
import { GalleryImageTitleProps } from "./GalleryImageTitle.d";

export const GalleryImageTitleComponent = overridable(({className, css, image}:GalleryImageTitleProps) => <>
    {css && <style>{css}</style>}
    <span className={className}>
        {image?.title}
    </span>
</>);

