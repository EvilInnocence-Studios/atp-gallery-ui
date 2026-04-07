import { IGalleryImage } from "@gallery-shared/image/types";
import { IUpdater } from "@core/lib/useUpdater";

export declare interface IGalleryImageEditorProps extends IUpdater<IGalleryImage> {
    image: IGalleryImage;
    remove: () => void;
    upload: (file: File) => void;
}

// What gets passed into the component from the parent as attributes
export declare interface IGalleryImageEditorInputProps {
    imageId: string;
    onDelete: () => void;
    classes?: any;
}

export type GalleryImageEditorProps = IGalleryImageEditorInputProps & IGalleryImageEditorProps;