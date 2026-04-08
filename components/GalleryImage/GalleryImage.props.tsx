import { GalleryPicker } from "../GalleryPicker";
import { IGalleryImageInputProps } from "./GalleryImage";

export const GalleryImagePropEditor = (
    { id }: IGalleryImageInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return <>
        <GalleryPicker imageId={id || ""} onSelect={updateProp("id")} />
    </>;
}
