import { overridable } from "@core/lib/overridable";
import clsx from "clsx";
import { GalleryImageProps } from "./GalleryImage.d";
import styles from './GalleryImage.module.scss';

export const GalleryImageComponent = overridable(({
    css, className, image, fullUrl, classes = styles,
}: GalleryImageProps) => {
    if (!fullUrl) return null;

    return (
        <>
            {!!css && <style>{css}</style>}
            <img
                src={fullUrl}
                alt={image?.description || image?.title}
                className={clsx([className, classes.galleryImage])}
            />
        </>
    );
});
