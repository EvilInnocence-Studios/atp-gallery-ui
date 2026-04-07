import { IGalleryImage } from "@gallery-shared/image/types";

export declare interface IGalleryProps {
    images: IGalleryImage[];
}

// What gets passed into the component from the parent as attributes
export declare interface IGalleryInputProps {
    classes?: any;
}

export type GalleryProps = IGalleryInputProps & IGalleryProps;