import { overridable } from "@core/lib/overridable";
import { GalleryImageIdContext } from "@gallery/lib/context";
import { Layout } from "@theming/components/Layout";
import { GalleryImageListItemProps } from "./GalleryImageListItem.d";

const Provider = GalleryImageIdContext.Provider;

export const GalleryImageListItemComponent = overridable(({id}:GalleryImageListItemProps) =>
    <Provider value={id}>
        <Layout element="galleryImageListItem" />
    </Provider>
);
