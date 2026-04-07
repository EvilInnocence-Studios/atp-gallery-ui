import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";
import Markdown from "react-markdown";

export const GalleryImageDescriptionLayoutEditor:LayoutEditor = ({css, className}:ILayoutEditorProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>
            <Markdown>Image description goes here.</Markdown>
    </div>
</>;
