import { GalleryPicker } from "../GalleryPicker";
import { IGalleryImageInputProps } from "./GalleryImage";

export const GalleryImagePropEditor = (
    { imageId }: IGalleryImageInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return <>
        <GalleryPicker imageId={imageId} onSelect={updateProp("imageId")} />
    </>;
}
