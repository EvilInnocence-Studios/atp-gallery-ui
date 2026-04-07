import { GalleryImageViewComponent } from "./GalleryImageView.component";
import { connectGalleryImageView } from "./GalleryImageView.container";
import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

export const GalleryImageViewLayoutEditor:LayoutEditor = ({css, className, ...props}:ILayoutEditorProps) => {
    const GalleryImageViewOrig = connectGalleryImageView(GalleryImageViewComponent);

    return <>
        {css && <style>{css}</style>}
        <div className={className}>
             <GalleryImageViewOrig {...props} />
        </div>
    </>;
};
