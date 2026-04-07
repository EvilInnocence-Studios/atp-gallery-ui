import { IGalleryImageContextProps } from "@gallery/lib/context";
import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface IGalleryImageDescriptionProps {

}

// What gets passed into the component from the parent as attributes
export declare interface IGalleryImageDescriptionInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    id?: string | null;
}

export type GalleryImageDescriptionProps = IGalleryImageDescriptionInputProps & IGalleryImageContextProps & IGalleryImageDescriptionProps;
