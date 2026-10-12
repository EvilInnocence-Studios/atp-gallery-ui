import { overridable } from "@core/lib/overridable";
import dayjs from "dayjs";
import { GalleryImagePostDateProps } from "./GalleryImagePostDate.d";

export const GalleryImagePostDateComponent = overridable(({className, css, image, format}:GalleryImagePostDateProps) => <>
    {css && <style>{css}</style>}
    <span className={className}>
        {image?.postDate ? dayjs(String(image.postDate).split('T')[0]).format(format || "MMMM D, YYYY") : ""}
    </span>
</>);

