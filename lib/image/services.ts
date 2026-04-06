import { IMethods } from "@core/lib/types";
import { IGalleryImage, NewGalleryImage } from "@gallery-shared/image/types";
import { Query } from "@core-shared/express/types";

export const imageServices = ({get, post, patch, remove}: IMethods) => ({
    image: {
        create: (data: NewGalleryImage): Promise<IGalleryImage> => post("gallery/image", data),
        search: (query: Query): Promise<IGalleryImage[]> => get("gallery/image", query),
        get: (id: string): Promise<IGalleryImage> => get(`gallery/image/${id}`),
        update: (id: string, updates: Partial<IGalleryImage>): Promise<IGalleryImage> => patch(`gallery/image/${id}`, updates),
        remove: (id: string): Promise<null> => remove(`gallery/image/${id}`)
    }
});
