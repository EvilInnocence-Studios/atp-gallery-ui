import { createInjector, inject, mergeProps } from "unstateless";
import { GalleryPickerComponent } from "./GalleryPicker.component";
import { IGalleryPickerInputProps, GalleryPickerProps, IGalleryPickerProps } from "./GalleryPicker.d";
import { overridable } from "@core/lib/overridable";
import { useEffect, useState } from "react";
import { IGalleryImage } from "@gallery-shared/image/types";
import { useLoaderAsync } from "@core/lib/useLoader";
import { services } from "@core/lib/api";

const injectGalleryPickerProps = createInjector(({ onSelect }: IGalleryPickerInputProps): IGalleryPickerProps => {
    const [images, setImages] = useState<IGalleryImage[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [query, setQuery] = useState('');

    const loader = useLoaderAsync();

    const refreshImages = () => {
        loader(() => services().gallery.image.search({}).then(setImages));
    }

    useEffect(() => {
        if (isModalVisible) {
            refreshImages();
        }
    }, [isModalVisible]);

    const upload = (file: File) => {
        loader(() => services().gallery.image.create(file, false).then((newImage) => {
            onSelect(newImage.id);
        }));
    }

    const filterColumns = ['url', 'description', 'title'];
    const filteredImages = images.filter(i => filterColumns.some(c => (i[c as keyof IGalleryImage] as string)?.toLowerCase().includes(query.toLowerCase())));

    return {
        isModalVisible,
        setIsModalVisible,
        images: filteredImages,
        query,
        setQuery,
        upload,
        isLoading: loader.isLoading,
    };
});

const connect = inject<IGalleryPickerInputProps, GalleryPickerProps>(mergeProps(
    injectGalleryPickerProps,
));
export const connectGalleryPicker = connect;

export const GalleryPicker = overridable<IGalleryPickerInputProps>(connect(GalleryPickerComponent));
