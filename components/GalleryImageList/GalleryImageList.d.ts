import { IGalleryImage } from "@gallery-shared/image/types";
import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface IGalleryImageListProps {
    images: IGalleryImage[];
}

// What gets passed into the component from the parent as attributes
export declare interface IGalleryImageListInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
}

export type GalleryImageListProps = IGalleryImageListInputProps & IGalleryImageListProps;
