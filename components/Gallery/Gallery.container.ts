import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { GalleryComponent } from "./Gallery.component";
import { GalleryProps, IGalleryInputProps, IGalleryProps } from "./Gallery.d";

const injectGalleryProps = createInjector(({}:IGalleryInputProps):IGalleryProps => {
    return {};
});

const connect = inject<IGalleryInputProps, GalleryProps>(mergeProps(
    injectGalleryProps,
));
export const connectGallery = connect;

export const Gallery = overridable<IGalleryInputProps>(connect(GalleryComponent));
