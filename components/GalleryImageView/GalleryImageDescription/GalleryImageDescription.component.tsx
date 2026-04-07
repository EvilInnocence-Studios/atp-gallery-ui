import { overridable } from "@core/lib/overridable";
import Markdown from "react-markdown";
import { GalleryImageDescriptionProps } from "./GalleryImageDescription.d";

export const GalleryImageDescriptionComponent = overridable(({className, css, image}:GalleryImageDescriptionProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>
        <Markdown>{image?.description}</Markdown>
    </div>
</>);

