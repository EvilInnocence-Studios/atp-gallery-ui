import { IRoute } from "@core/lib/module";
import { Index } from "ts-functional/dist/types";
import { GalleryImageManager } from "../components/GalleryImageManager";
import { Gallery } from "@gallery/components/Gallery";
import { GalleryImageView } from "@gallery/components/GalleryImageView";
import { withRoute } from "@core/lib/withRoute";

export const routes:Index<IRoute[]> = {
    admin: [
        { path: "/gallery/images", component: GalleryImageManager }
    ],
    public: [
        { path: "/gallery", component: Gallery},
        { path: "/gallery/:imageId", component: withRoute(GalleryImageView)},
    ],
};
