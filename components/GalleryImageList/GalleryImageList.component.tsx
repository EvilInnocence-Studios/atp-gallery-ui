import { overridable } from "@core/lib/overridable";
import { GalleryImageListItem } from "../GalleryImageListItem";
import { GalleryImageListProps } from "./GalleryImageList.d";

export const GalleryImageListComponent = overridable(({className, css, images}:GalleryImageListProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>
        {images.map((image) => (
            <GalleryImageListItem key={image.id} id={image.id} />
        ))}
    </div>
</>);

