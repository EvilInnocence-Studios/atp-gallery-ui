import { services } from "@core/lib/api"
import { IGalleryImage } from "@gallery-shared/image/types";
import { useEffect, useMemo, useState } from "react";
import { memoizePromise } from "ts-functional"

const getImages = memoizePromise(() => services().gallery.image.search({}), {});

export const useGallery = () => {
    const [images, setImages] = useState<IGalleryImage[]>([]);

    useEffect(() => {
        getImages().then(setImages);
    }, []);

    const gallery = useMemo(() => ({
        list: () => images,
        get: (id:string) => images.filter(i => i.id === id)[0],
    }), [images]);

    return gallery;
}