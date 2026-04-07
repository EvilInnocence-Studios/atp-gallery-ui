import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

export const GalleryImageTitleLayoutEditor:LayoutEditor = ({css, className}:ILayoutEditorProps) => <>
    {css && <style>{css}</style>}
    <span className={className}>
            Image Title Goes Here
    </span>
</>;
