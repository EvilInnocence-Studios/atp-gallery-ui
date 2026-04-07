import { GalleryPicker } from "@gallery/components/GalleryPicker";
import { IGalleryImageDescriptionInputProps } from "./GalleryImageDescription.d";

export const GalleryImageDescriptionPropEditor = (
    {id}: IGalleryImageDescriptionInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return <>
        <GalleryPicker imageId={id || ""} onSelect={updateProp("id)")} />
    </>;
}
