import { createInjector, inject, mergeProps } from "unstateless";
import {GalleryImageTitleComponent} from "./GalleryImageTitle.component";
import {IGalleryImageTitleInputProps, GalleryImageTitleProps, IGalleryImageTitleProps} from "./GalleryImageTitle.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { GalleryImageTitleLayoutEditor } from "./GalleryImageTitle.layout";
import { GalleryImageTitlePropEditor } from "./GalleryImageTitle.props";
import { injectGalleryImageContextProps } from "@gallery/lib/context";

const injectGalleryImageTitleProps = createInjector(({}:IGalleryImageTitleInputProps):IGalleryImageTitleProps => {
    return {};
});

const connect = inject<IGalleryImageTitleInputProps, GalleryImageTitleProps>(mergeProps(
    injectGalleryImageContextProps,
    injectGalleryImageTitleProps,
));
export const connectGalleryImageTitle = connect;

export const GalleryImageTitle = withLayoutMetadata(
    overridable<IGalleryImageTitleInputProps>(connect(GalleryImageTitleComponent)),
    {
        name: "GalleryImageTitle",
        displayName: "Gallery Image Title",
        category: "Gallery",
        subCategory: "Image",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: GalleryImageTitleLayoutEditor,
        propEditor: GalleryImageTitlePropEditor,
    }
);
