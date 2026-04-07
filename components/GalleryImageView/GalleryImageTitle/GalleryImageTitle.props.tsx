import { GalleryPicker } from "@gallery/components/GalleryPicker";
import { IGalleryImageTitleInputProps } from "./GalleryImageTitle.d";

export const GalleryImageTitlePropEditor = (
    {id}: IGalleryImageTitleInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return <>
        <GalleryPicker imageId={id || ""} onSelect={updateProp("id")} />
    </>;
}
