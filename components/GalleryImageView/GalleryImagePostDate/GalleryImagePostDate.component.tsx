import { overridable } from "@core/lib/overridable";
import dayjs from "dayjs";
import { GalleryImagePostDateProps } from "./GalleryImagePostDate.d";

export const GalleryImagePostDateComponent = overridable(({className, css, image, format}:GalleryImagePostDateProps) => <>
    {css && <style>{css}</style>}
    <span className={className}>
        {dayjs(image?.postDate).format(format || "MMMM D, YYYY")}
    </span>
</>);

