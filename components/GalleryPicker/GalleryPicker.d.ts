import { IGalleryImage } from "@gallery-shared/image/types";
import { Setter } from "unstateless";

export declare interface IGalleryPickerProps {
    isModalVisible: boolean;
    setIsModalVisible: Setter<boolean>;
    images: IGalleryImage[];
    query: string;
    setQuery: Setter<string>;
    upload: (file: File) => void;
    isLoading: boolean;
}

// What gets passed into the component from the parent as attributes
export declare interface IGalleryPickerInputProps {
    classes?: any;
    imageId?: string;
    settingKey?: string;
    onSelect: (imageId: string) => void;
    small?: boolean;
}

export type GalleryPickerProps = IGalleryPickerInputProps & IGalleryPickerProps;