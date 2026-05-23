import { overridable } from "@core/lib/overridable";
import { useGallery } from "@gallery/lib/useGallery";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { GalleryImageListComponent } from "./GalleryImageList.component";
import { GalleryImageListProps, IGalleryImageListInputProps, IGalleryImageListProps } from "./GalleryImageList.d";
import { GalleryImageListLayoutEditor } from "./GalleryImageList.layout";
import { GalleryImageListPropEditor } from "./GalleryImageList.props";
import icon from './icon.svg';

const injectGalleryImageListProps = createInjector(({}:IGalleryImageListInputProps):IGalleryImageListProps => {
    const {list} = useGallery();
    
    return {images: list().sort((a, b) => new Date(b.postDate).getTime() - new Date(a.postDate).getTime())};

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
