import { IGalleryImageListInputProps } from "./GalleryImageList.d";

export const GalleryImageListPropEditor = (
    {}: IGalleryImageListInputProps,
    updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return <>
        Placeholder Prop Editor for GalleryImageList
    </>;
}
