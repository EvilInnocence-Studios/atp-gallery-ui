import { overridable } from "@core/lib/overridable";
import { GalleryImageIdContext } from "@gallery/lib/context";
import { Layout } from "@theming/components/Layout";
import { GalleryProps } from "./Gallery.d";
import styles from './Gallery.module.scss';

const Provider = GalleryImageIdContext.Provider;

export const GalleryComponent = overridable(({classes = styles, images}:GalleryProps) =>
    <div className={classes.gallery}>
        {images.map((image) => (
            <Provider key={image.id} value={image.id}>
                <Layout element="galleryImageListItem" />
            </Provider>
        ))}
    </div>
);
