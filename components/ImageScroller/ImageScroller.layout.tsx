import { ImageScrollerComponent } from "./ImageScroller.component";
import { connectImageScroller } from "./ImageScroller.container";
import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

export const ImageScrollerLayoutEditor:LayoutEditor = ({css, className, ...props}:ILayoutEditorProps) => {
    const ImageScrollerOrig = connectImageScroller(ImageScrollerComponent);

    return <>
        {css && <style>{css}</style>}
        <div className={className}>
             <ImageScrollerOrig {...props} />
        </div>
    </>;
};
