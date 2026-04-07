import { GalleryPicker } from "../GalleryPicker";
import { IGalleryImageViewInputProps } from "./GalleryImageView.d";

export const GalleryImageViewPropEditor = (
    {imageId}: IGalleryImageViewInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return <>
        <GalleryPicker imageId={imageId || ""} onSelect={updateProp("imageId")} />
    </>;
}
