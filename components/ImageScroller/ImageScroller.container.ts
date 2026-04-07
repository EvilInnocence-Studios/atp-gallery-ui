import { createInjector, inject, mergeProps } from "unstateless";
import {ImageScrollerComponent} from "./ImageScroller.component";
import {IImageScrollerInputProps, ImageScrollerProps, IImageScrollerProps} from "./ImageScroller.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { ImageScrollerLayoutEditor } from "./ImageScroller.layout";
import { ImageScrollerPropEditor } from "./ImageScroller.props";

const injectImageScrollerProps = createInjector(({}:IImageScrollerInputProps):IImageScrollerProps => {
    return {};
});

const connect = inject<IImageScrollerInputProps, ImageScrollerProps>(mergeProps(
    injectImageScrollerProps,
));
export const connectImageScroller = connect;

export const ImageScroller = withLayoutMetadata(
    overridable<IImageScrollerInputProps>(connect(ImageScrollerComponent)),
    {
        name: "ImageScroller",
        displayName: "ImageScroller",
        category: "Gallery",
        subCategory: "Image",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: ImageScrollerLayoutEditor,
        propEditor: ImageScrollerPropEditor,
    }
);
