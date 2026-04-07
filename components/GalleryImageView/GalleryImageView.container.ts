import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { GalleryImageViewComponent } from "./GalleryImageView.component";
import { GalleryImageViewProps, IGalleryImageViewInputProps, IGalleryImageViewProps } from "./GalleryImageView.d";
import { GalleryImageViewLayoutEditor } from "./GalleryImageView.layout";
import { GalleryImageViewPropEditor } from "./GalleryImageView.props";
import icon from './icon.svg';

const injectGalleryImageViewProps = createInjector(({}:IGalleryImageViewInputProps):IGalleryImageViewProps => {
    return {};
});

const connect = inject<IGalleryImageViewInputProps, GalleryImageViewProps>(mergeProps(
    injectGalleryImageViewProps,
));
export const connectGalleryImageView = connect;

export const GalleryImageView = withLayoutMetadata(
    overridable<IGalleryImageViewInputProps>(connect(GalleryImageViewComponent)),
    {
        name: "GalleryImageView",
        displayName: "Gallery Image View",
        category: "Gallery",
        subCategory: "Image",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: GalleryImageViewLayoutEditor,
        propEditor: GalleryImageViewPropEditor,
    }
);
