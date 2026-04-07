import { createInjector, inject, mergeProps } from "unstateless";
import {GalleryComponent} from "./Gallery.component";
import {IGalleryInputProps, GalleryProps, IGalleryProps} from "./Gallery.d";
import { overridable } from "@core/lib/overridable";

const injectGalleryProps = createInjector(({}:IGalleryInputProps):IGalleryProps => {
    return {};
});

const connect = inject<IGalleryInputProps, GalleryProps>(mergeProps(
    injectGalleryProps,
));
export const connectGallery = connect;

export const Gallery = overridable<IGalleryInputProps>(connect(GalleryComponent));
