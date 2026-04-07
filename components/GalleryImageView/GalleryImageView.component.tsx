import { overridable } from "@core/lib/overridable";
import { GalleryImageIdContext } from "@gallery/lib/context";
import { Layout } from "@theming/components/Layout";
import { GalleryImageViewProps } from "./GalleryImageView.d";

const Provider = GalleryImageIdContext.Provider;

export const GalleryImageViewComponent = overridable(({ className, css, imageId}:GalleryImageViewProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>
        <Provider value={imageId || null}>
            <Layout element="galleryImageView" />
        </Provider>
    </div>
</>);

