import { IGalleryImage } from "@gallery-shared/image/types";
import { services } from "@core/lib/api";
import { flash } from "@core/lib/flash";
import { overridable } from "@core/lib/overridable";
import { useLoaderAsync } from "@core/lib/useLoader";
import { useUpdater } from "@core/lib/useUpdater";
import { createInjector, inject, mergeProps } from "unstateless";
import { GalleryImageEditorComponent } from "./GalleryImageEditor.component";
import { IGalleryImageEditorInputProps, IGalleryImageEditorProps, GalleryImageEditorProps } from "./GalleryImageEditor.d";

const injectGalleryImageEditorProps = createInjector(({imageId, onDelete}:IGalleryImageEditorInputProps):IGalleryImageEditorProps => {
    const loader = useLoaderAsync();

    const updater = useUpdater<IGalleryImage>(
        "galleryImage",
        imageId,
        {} as IGalleryImage,
        services().gallery.image.get,
        services().gallery.image.update,
        "manual"
    );

    const remove = () => {
        services().gallery.image.remove(imageId).then(() => {
            flash.success("Image removed");
            onDelete();
        });
    }

    const upload = (file: File) => {
        loader(() => services().gallery.image.replace(updater.history.entity.id, file)
            .then(updater.refresh)
            .then(flash.success("Image replaced"))
        );
    }
    
    return {
        image: updater.history.entity,
        ...updater,
        isLoading: updater.isLoading || loader.isLoading,
        remove,
        upload,
    };
});

const connect = inject<IGalleryImageEditorInputProps, GalleryImageEditorProps>(mergeProps(
    injectGalleryImageEditorProps,
));
export const connectGalleryImageEditor = connect;

export const GalleryImageEditor = overridable<IGalleryImageEditorInputProps>(connect(GalleryImageEditorComponent));
