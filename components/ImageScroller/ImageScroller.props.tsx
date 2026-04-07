import { Button } from "antd";
import { IImageScrollerInputProps } from "./ImageScroller.d";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { GalleryPicker } from "../GalleryPicker";
import { Fragment } from "react/jsx-runtime";

export const ImageScrollerPropEditor = (
    {imageIds}: IImageScrollerInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return <>
        <Button onClick={() => updateProp("imageIds")([...imageIds || [], ""])}>
            <FontAwesomeIcon icon={faPlus} /> Add image
        </Button>
        {imageIds?.map((id, index) => <Fragment>
            <GalleryPicker
                imageId={id}
                onSelect={newId => {
                    imageIds[index] = newId;
                    updateProp("imageIds")(imageIds);
                }}
                small
            />
            <Button danger onClick={() => {
                updateProp("imageIds")(imageIds.filter(i => i !== id));
            }}>
                <FontAwesomeIcon icon={faTrash} /> Remove image
            </Button>
        </Fragment>)}
    </>;
}
