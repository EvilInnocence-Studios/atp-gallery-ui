import { IGalleryImageContextProps } from "@gallery/lib/context";
import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface IGalleryImageViewProps {
}

// What gets passed into the component from the parent as attributes
export declare interface IGalleryImageViewInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    imageId?: string | null;
}

export type GalleryImageViewProps = IGalleryImageViewInputProps & IGalleryImageViewProps;
