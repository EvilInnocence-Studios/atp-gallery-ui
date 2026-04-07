import { IGalleryImage } from "@gallery-shared/image/types";
import { Setter } from "unstateless";

export declare interface IGalleryImageManagerProps {
    images: IGalleryImage[];
    isLoading: boolean;
    upload: (file: File) => void;
    overwrite: boolean;
    setOverwrite: Setter<boolean>;
    query: string;
    setQuery: Setter<string>;
    refresh: () => void;
}

// What gets passed into the component from the parent as attributes
export declare interface IGalleryImageManagerInputProps {
    classes?: any;
}

export type GalleryImageManagerProps = IGalleryImageManagerInputProps & IGalleryImageManagerProps;