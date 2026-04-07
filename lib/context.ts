import { services } from "@core/lib/api";
import { IGalleryImage } from "@gallery-shared/image/types";
import { createContext, useContext, useEffect, useState } from "react";
import { createInjector } from "unstateless";

// --- Gallery Image Context --- //

export const GalleryImageIdContext = createContext<string | null>("");

export declare interface IGalleryImageContextProps {
    image: IGalleryImage | null;
}

export const injectGalleryImageContextProps = createInjector(({id}:{id?: string | null}):IGalleryImageContextProps => {
    const defaultId = useContext(GalleryImageIdContext);
    const imageId = id || defaultId;
    const [image, setImage] = useState<IGalleryImage | null>(null);

    useEffect(() => {
        if(imageId) {
            services().gallery.image.get(imageId).then(setImage);
        }
    }, [imageId]);

    return {image};
});