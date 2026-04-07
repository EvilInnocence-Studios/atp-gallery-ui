import { overridable } from "@core/lib/overridable";
import {ImageScrollerProps} from "./ImageScroller.d";
import styles from './ImageScroller.module.scss';
import { Scroller } from "@core/components/Scroller";
import { prop } from "ts-functional";
import { GalleryImageListItem } from "../GalleryImageListItem";

const RenderItem = ({item}:{item: string}) => <GalleryImageListItem id={item} />;

export const ImageScrollerComponent = overridable(({classes = styles, className, css, imageIds}:ImageScrollerProps) => <>
    {css && <style>{css}</style>}
    <Scroller
        items={imageIds || []}
        title=""
        getId={prop("id")}
        Component={RenderItem}
        className={className}
        classes={classes}
    />
</>);

