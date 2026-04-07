import { overridable } from "@core/lib/overridable";
import { injectGalleryImageContextProps } from "@gallery/lib/context";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { GalleryImagePostDateComponent } from "./GalleryImagePostDate.component";
import { GalleryImagePostDateProps, IGalleryImagePostDateInputProps, IGalleryImagePostDateProps } from "./GalleryImagePostDate.d";
import { GalleryImagePostDateLayoutEditor } from "./GalleryImagePostDate.layout";
import { GalleryImagePostDatePropEditor } from "./GalleryImagePostDate.props";
import icon from './icon.svg';

const injectGalleryImagePostDateProps = createInjector(({}:IGalleryImagePostDateInputProps):IGalleryImagePostDateProps => {
    return {};
});

const connect = inject<IGalleryImagePostDateInputProps, GalleryImagePostDateProps>(mergeProps(
    injectGalleryImageContextProps,
    injectGalleryImagePostDateProps,
));
export const connectGalleryImagePostDate = connect;

export const GalleryImagePostDate = withLayoutMetadata(
    overridable<IGalleryImagePostDateInputProps>(connect(GalleryImagePostDateComponent)),
    {
        name: "GalleryImagePostDate",
        displayName: "Gallery Image Post Date",
        category: "Gallery",
        subCategory: "Image",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: GalleryImagePostDateLayoutEditor,
        propEditor: GalleryImagePostDatePropEditor,
    }
);
