import { overridable } from "@core/lib/overridable";
import {GalleryProps} from "./Gallery.d";
import styles from './Gallery.module.scss';

export const GalleryComponent = overridable(({classes = styles}:GalleryProps) =>
    <div>Gallery component goes here.</div>
);
