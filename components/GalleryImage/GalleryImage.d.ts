import { IGalleryImage } from "@gallery-shared/image/types";
import { IGalleryImageContextProps } from "@gallery/lib/context";

export declare interface IGalleryImageProps {
    fullUrl: string;
}

// What gets passed into the component from the parent as attributes
export declare interface IGalleryImageInputProps {
    id?: string | null;
    classes?: any;
    css?: string;
    className?: string;
};

export type GalleryImageProps = IGalleryImageInputProps & IGalleryImageContextProps & IGalleryImageProps;