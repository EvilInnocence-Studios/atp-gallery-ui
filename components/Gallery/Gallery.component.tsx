import { overridable } from "@core/lib/overridable";
import { Layout } from "@theming/components/Layout";
import { GalleryProps } from "./Gallery.d";
import styles from './Gallery.module.scss';

export const GalleryComponent = overridable(({classes = styles}:GalleryProps) =>
    <div className={classes.gallery}>
        <Layout element="galleryImageList" />
    </div>
);
