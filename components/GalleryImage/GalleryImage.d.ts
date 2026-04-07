import { IGalleryImage } from "@gallery-shared/image/types";

export declare interface IGalleryImageProps {
    image: IGalleryImage | null;
    isLoading: boolean;
    fullUrl: string;
}

// What gets passed into the component from the parent as attributes
export declare interface IGalleryImageInputProps {
    imageId?: string;
    classes?: any;
    css?: string;
    className?: string;
};

export type GalleryImageProps = IGalleryImageInputProps & IGalleryImageProps;