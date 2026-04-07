import { overridable } from "@core/lib/overridable";
import { GalleryImageIdContext } from "@gallery/lib/context";
import { Layout } from "@theming/components/Layout";
import { GalleryImageListProps } from "./GalleryImageList.d";

const Provider = GalleryImageIdContext.Provider;

export const GalleryImageListComponent = overridable(({className, css, images}:GalleryImageListProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>
        {images.map((image) => (
            <Provider key={image.id} value={image.id}>
                <Layout element="galleryImageListItem" />
            </Provider>
        ))}
    </div>
</>);

