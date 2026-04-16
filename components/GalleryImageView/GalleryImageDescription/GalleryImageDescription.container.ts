import { overridable } from "@core/lib/overridable";
import { injectGalleryImageContextProps } from "@gallery/lib/context";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { GalleryImageDescriptionComponent } from "./GalleryImageDescription.component";
import { GalleryImageDescriptionProps, IGalleryImageDescriptionInputProps, IGalleryImageDescriptionProps } from "./GalleryImageDescription.d";
import { GalleryImageDescriptionLayoutEditor } from "./GalleryImageDescription.layout";
import { GalleryImageDescriptionPropEditor } from "./GalleryImageDescription.props";
import icon from './icon.svg';

const injectGalleryImageDescriptionProps = createInjector(({}:IGalleryImageDescriptionInputProps):IGalleryImageDescriptionProps => {
    return {};
});

const connect = inject<IGalleryImageDescriptionInputProps, GalleryImageDescriptionProps>(mergeProps(
    injectGalleryImageContextProps,
    injectGalleryImageDescriptionProps,
));
export const connectGalleryImageDescription = connect;

export const GalleryImageDescription = withLayoutMetadata(
    overridable<IGalleryImageDescriptionInputProps>(connect(GalleryImageDescriptionComponent)),
    {
        name: "GalleryImageDescription",
        displayName: "Gallery Image Description",
        category: "Gallery",
        subCategory: "Meta",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: GalleryImageDescriptionLayoutEditor,
        propEditor: GalleryImageDescriptionPropEditor,
    }
);
