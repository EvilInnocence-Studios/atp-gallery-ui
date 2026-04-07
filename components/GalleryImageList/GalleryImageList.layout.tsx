import { GalleryImageListComponent } from "./GalleryImageList.component";
import { connectGalleryImageList } from "./GalleryImageList.container";
import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

export const GalleryImageListLayoutEditor:LayoutEditor = ({css, className, ...props}:ILayoutEditorProps) => {
    const GalleryImageListOrig = connectGalleryImageList(GalleryImageListComponent);

    return <>
        {css && <style>{css}</style>}
        <div className={className}>
             <GalleryImageListOrig {...props} />
        </div>
    </>;
};
