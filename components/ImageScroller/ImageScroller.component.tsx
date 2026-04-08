import { Scroller } from "@core/components/Scroller";
import { overridable } from "@core/lib/overridable";
import { prop } from "ts-functional";
import { GalleryImageListItem } from "../GalleryImageListItem";
import { ImageScrollerProps } from "./ImageScroller.d";

const RenderItem = ({item}:{item: string}) => <GalleryImageListItem id={item} />;

export const ImageScrollerComponent = overridable(({css, imageIds}:ImageScrollerProps) => <>
    {css && <style>{css}</style>}
    <Scroller
        items={imageIds || []}
        title=""
        getId={prop("id")}
        Component={RenderItem}
    />
</>);

