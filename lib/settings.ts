import { ISettingContainer } from "@common/lib/setting/types";

export const settings: ISettingContainer = {
    Gallery: {
        General: {
            "gallery.imageFolder": {
                displayName: "Image Folder",
                type: "string",
                defaultValue: "gallery/images",
                description: "The folder where gallery images are stored.",
            }
        }
    }
};
