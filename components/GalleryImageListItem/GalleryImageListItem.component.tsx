import { overridable } from "@core/lib/overridable";
import { GalleryImageIdContext } from "@gallery/lib/context";
import { Layout } from "@theming/components/Layout";
import { GalleryImageListItemProps } from "./GalleryImageListItem.d";
import { Link } from "react-router";

const Provider = GalleryImageIdContext.Provider;

export const GalleryImageListItemComponent = overridable(({id}:GalleryImageListItemProps) =>
    <Provider value={id}>
        <Link to={`/gallery/${id}`}>
            <Layout element="galleryImageListItem" />
        </Link>
    </Provider>
);
