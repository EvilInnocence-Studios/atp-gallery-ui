import { GalleryImagePostDateComponent } from "./GalleryImagePostDate.component";
import { connectGalleryImagePostDate } from "./GalleryImagePostDate.container";
import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

export const GalleryImagePostDateLayoutEditor:LayoutEditor = ({css, className, ...props}:ILayoutEditorProps) => {
    const GalleryImagePostDateOrig = connectGalleryImagePostDate(GalleryImagePostDateComponent);

    return <>
        {css && <style>{css}</style>}
        <span className={className}>
             <GalleryImagePostDateOrig {...props} />
        </span>
    </>;
};
