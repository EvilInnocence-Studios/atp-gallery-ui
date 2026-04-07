import { useSetting } from "@common/lib/setting/services";
import { services } from "@core/lib/api";
import { overridable } from "@core/lib/overridable";
import { IGalleryImage } from "@gallery-shared/image/types";
import { IGalleryImageContextProps, injectGalleryImageContextProps } from "@gallery/lib/context";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { ILayoutComponent, ILayoutComponentSerialized } from "@theming/lib/layout/layout";
import { createInjector, inject, mergeProps } from "unstateless";
import { GalleryImageComponent } from "./GalleryImage.component";
import { GalleryImageProps, IGalleryImageInputProps, IGalleryImageProps } from "./GalleryImage.d";
import { GalleryImageLayoutEditor } from "./GalleryImage.layout";
import { GalleryImagePropEditor } from "./GalleryImage.props";
import icon from './icon.svg';

export const useFullImageUrl = (folderSetting: string, fileName:string) => {
    const imgHost = useSetting("imageHost");
    const imgFolder = useSetting(folderSetting);
    return !!imgHost && !!imgFolder
        ? `${imgHost}/${imgFolder}/${encodeURIComponent(fileName)}`
        : "";
}

export const getFullImageUrl = async (folderSetting: string, fileName:string) => {
    const imgHost = await services().setting.get("imageHost");
    const imgFolder = await services().setting.get(folderSetting);
    return !!imgHost && !!imgFolder
        ? `${imgHost}/${imgFolder}/${encodeURIComponent(fileName)}`
        : "";
}

const injectGalleryImageProps = createInjector(({image}:IGalleryImageInputProps & IGalleryImageContextProps):IGalleryImageProps => {
    const fullUrl = useFullImageUrl("gallery.imageFolder", image?.url || "");

    return {fullUrl};
});

const connect = inject<IGalleryImageInputProps, GalleryImageProps>(mergeProps(
    injectGalleryImageContextProps,
    injectGalleryImageProps,
));
export const connectGalleryImage = connect;

export const GalleryImage = withLayoutMetadata(
    overridable<IGalleryImageInputProps>(connect(GalleryImageComponent)),
    {
        name: "Image",
        displayName: "Gallery Image",
        category: "Gallery",
        subCategory: "Image",
        icon,
        description: "A gallery image",
        layoutEditor: GalleryImageLayoutEditor,
        propEditor: GalleryImagePropEditor,
        serialize: async (cmp:ILayoutComponent, context: { addFile: (name: string, blob: Blob) => void }): Promise<ILayoutComponentSerialized<{img:IGalleryImage, data: string}>> => {
            // Load the image and serialize it to  __data along with the image file itself
            const img = await services().gallery.image.get(cmp.props?.imageId || "");
            const fullUrl = await getFullImageUrl("gallery.imageFolder", img.url || "");
            const blob = await fetch(fullUrl, { mode: 'cors', cache: 'no-cache' }).then(res => res.blob());
            
            if (context && context.addFile) {
                context.addFile(img.url, blob);
            }

            return {
                ...cmp,
                __data: {
                    img, 
                    data: img.url // Store filename instead of base64
                }
            };
        },
        deserialize: async ({__data, ...cmp}:ILayoutComponentSerialized<{img:IGalleryImage, data: string}>, context: { getFile: (name: string) => Promise<Blob | null> }) => {
            if (!__data) return Promise.resolve(cmp);

            const {img, data} = __data;
            const fileName = data; // 'data' now holds the filename

            // Get blob from context
            let blob: Blob | null = null;
            if (context && context.getFile) {
                blob = await context.getFile(fileName);
            }

            if (!blob) {
                // Fallback or error if image not found in zip
                 console.warn(`Image ${fileName} not found in theme package`);
                 return Promise.resolve(cmp);
            }

            const file = new File([blob], img.url);

            // Create image from file
            const newImg:Partial<IGalleryImage> = await services().gallery.image.create(file, true);
            const imageId = newImg.id as string;
            newImg.id = undefined;

            // Update the image with the original metadata
            img.id = imageId;
            await services().gallery.image.update(imageId, img);
            
            return Promise.resolve({
                ...cmp,
                props: {
                    ...cmp.props,
                    imageId
                }
            });
        }
    }
);
