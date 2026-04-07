import { IGalleryImage } from "@gallery-shared/image/types";
import { services } from "@core/lib/api";
import { overridable } from "@core/lib/overridable";
import { useLoaderAsync } from "@core/lib/useLoader";
import { useEffect, useState } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { GalleryImageManagerComponent } from "./GalleryImageManager.component";
import { IGalleryImageManagerInputProps, IGalleryImageManagerProps, GalleryImageManagerProps } from "./GalleryImageManager.d";

const injectGalleryImageManagerProps = createInjector(({}:IGalleryImageManagerInputProps):IGalleryImageManagerProps => {
    const [images, setImages] = useState<IGalleryImage[]>([]);
    const [overwrite, setOverwrite] = useState(false);
    const [query, setQuery] = useState('');

    const loader = useLoaderAsync();

    const refresh = () => {
        loader(() => services().gallery.image.search({}).then(setImages));
    }

    useEffect(refresh, []);
    
    const upload = (file: File) => {
        loader(() => services().gallery.image.create(file, overwrite).then(refresh));
    }

    const filterColumns = ['url', 'description', 'title'];
    const filteredImages = images.filter(i => filterColumns.some(c => (i[c as keyof IGalleryImage] as string)?.toLowerCase().includes(query.toLowerCase())));

    return {
        images: filteredImages,
        isLoading: loader.isLoading,
        upload,
        overwrite, setOverwrite,
        query, setQuery,
        refresh,
    };
});

const connect = inject<IGalleryImageManagerInputProps, GalleryImageManagerProps>(mergeProps(
    injectGalleryImageManagerProps,
));
export const connectGalleryImageManager = connect;

export const GalleryImageManager = overridable<IGalleryImageManagerInputProps>(connect(GalleryImageManagerComponent));
