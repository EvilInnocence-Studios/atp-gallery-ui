import { createInjector, inject, mergeProps } from "unstateless";
import {GalleryImageListComponent} from "./GalleryImageList.component";
import {IGalleryImageListInputProps, GalleryImageListProps, IGalleryImageListProps} from "./GalleryImageList.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { GalleryImageListLayoutEditor } from "./GalleryImageList.layout";
import { GalleryImageListPropEditor } from "./GalleryImageList.props";
import { useGallery } from "@gallery/lib/useGallery";

const injectGalleryImageListProps = createInjector(({}:IGalleryImageListInputProps):IGalleryImageListProps => {
    const {list} = useGallery();
    
    return {images: list()};

});

const connect = inject<IGalleryImageListInputProps, GalleryImageListProps>(mergeProps(
    injectGalleryImageListProps,
));
export const connectGalleryImageList = connect;

export const GalleryImageList = withLayoutMetadata(
    overridable<IGalleryImageListInputProps>(connect(GalleryImageListComponent)),
    {
        name: "GalleryImageList",
        displayName: "Gallery Image List",
        category: "Gallery",
        subCategory: "Image",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: GalleryImageListLayoutEditor,
        propEditor: GalleryImageListPropEditor,
    }
);
