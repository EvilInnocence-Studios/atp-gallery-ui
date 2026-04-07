import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface IImageScrollerProps {

}

// What gets passed into the component from the parent as attributes
export declare interface IImageScrollerInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    imageIds?: string[];
}

export type ImageScrollerProps = IImageScrollerInputProps & IImageScrollerProps;
