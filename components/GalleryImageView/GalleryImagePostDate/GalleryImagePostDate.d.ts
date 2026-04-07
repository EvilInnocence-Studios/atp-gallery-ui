import { IGalleryImageContextProps } from "@gallery/lib/context";
import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface IGalleryImagePostDateProps {

}

// What gets passed into the component from the parent as attributes
export declare interface IGalleryImagePostDateInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    id?: string | null;
    format?: string;
}

export type GalleryImagePostDateProps = IGalleryImagePostDateInputProps & IGalleryImageContextProps & IGalleryImagePostDateProps;
