import { ITag } from "@common-shared/tag/types";
import { Query } from "@core-shared/express/types";
import { IMethods } from "@core/lib/types";
import { getResults, handleError } from "@core/lib/util";
import { IGalleryImage } from "@gallery-shared/image/types";

export const imageServices = ({get, post, patch, remove}: IMethods) => ({
    image: {
        create: (file:File, overwrite: boolean):Promise<IGalleryImage> => {
            const formData = new FormData();
            formData.append('file', file);
            return post(overwrite ? `gallery/image/replace` : `gallery/image`, formData)
                .then(getResults<IGalleryImage>)
                .catch(handleError);
        },                        
        search: (query: Query): Promise<IGalleryImage[]> => get("gallery/image", query).then(getResults),
        get: (id: string): Promise<IGalleryImage> => get(`gallery/image/${id}`).then(getResults),
        replace: (id:string, file:File) => {
            const formData = new FormData();
            formData.append('file', file);
            return post(`gallery/image/${id}/replace`, formData)
                .then(getResults<IGalleryImage>)
                .catch(handleError);
        },
        update: (id: string, updates: Partial<IGalleryImage>): Promise<IGalleryImage> => patch(`gallery/image/${id}`, updates).then(getResults),
        remove: (id: string): Promise<null> => remove(`gallery/image/${id}`),
        tag: {
            search: (imageId: string): Promise<ITag[]> => get(`gallery/image/${imageId}/tag`).then(getResults),
            create: (imageId: string, tagId: string): Promise<void> => post(`gallery/image/${imageId}/tag`, {tagId}).then(getResults),
            remove: (imageId: string, tagId: string): Promise<void> => remove(`gallery/image/${imageId}/tag/${tagId}`).then(getResults),
        },
    }
});
