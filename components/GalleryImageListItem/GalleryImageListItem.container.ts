import { createInjector, inject, mergeProps } from "unstateless";
import {GalleryImageListItemComponent} from "./GalleryImageListItem.component";
import {IGalleryImageListItemInputProps, GalleryImageListItemProps, IGalleryImageListItemProps} from "./GalleryImageListItem.d";
import { overridable } from "@core/lib/overridable";

const injectGalleryImageListItemProps = createInjector(({}:IGalleryImageListItemInputProps):IGalleryImageListItemProps => {
    return {};
});

const connect = inject<IGalleryImageListItemInputProps, GalleryImageListItemProps>(mergeProps(
    injectGalleryImageListItemProps,
));
export const connectGalleryImageListItem = connect;

export const GalleryImageListItem = overridable<IGalleryImageListItemInputProps>(connect(GalleryImageListItemComponent));
