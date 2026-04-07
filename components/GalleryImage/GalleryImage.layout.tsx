import { services } from "@core/lib/api";
import { flash } from "@core/lib/flash";
import { useLoaderAsync } from "@core/lib/useLoader";
import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";
import { useState, useMemo } from "react";
import { GalleryImageComponent } from "./GalleryImage.component";
import { connectGalleryImage } from "./GalleryImage.container";
import { GalleryImageUploadOverlay } from "./GalleryImageUploadOverlay";

export const GalleryImageLayoutEditor:LayoutEditor = ({__layoutId, __update, __isSelected, ...props}:ILayoutEditorProps) => {
    const loader = useLoaderAsync();
    const [node, setNode] = useState<HTMLElement | null>(null);

    const GalleryImageOrig = useMemo(() => connectGalleryImage(GalleryImageComponent), []);

    const upload = !!props.imageId
        ? (file: File) => {
            loader(() => services().gallery.image.replace(props.imageId || "", file)
                .then(() => flash.success("Image replaced"))
            );
        }
        : (file: File) => {
            loader(() => services().gallery.image.create(file, true)
                .then((newImage) => {
                    console.log("newImage", newImage);
                    __update("imageId")(newImage.id)
                })
                .then(flash.success("Image uploaded"))
            );
        }

    return (
        <>
            {props.imageId ? (
                <GalleryImageOrig {...props} />
            ) : (
                <div 
                    ref={setNode} 
                    style={{ 
                            minHeight: '100px', 
                            width: '100%', 
                            background: 'rgba(0,0,0,0.05)', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            border: '1px dashed #ccc',
                            color: '#999'
                    }}
                >
                    {!__isSelected && <span>Upload Image</span>}
                </div>
            )}
            
            {__isSelected && (
                <GalleryImageUploadOverlay 
                    targetNode={node}
                    onUpload={upload}
                    hasImage={!!props.imageId}
                />
            )}
        </>
    );
};
