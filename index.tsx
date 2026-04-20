import { IModule } from "@core/lib/module";
import { ComponentRegistry, LayoutRegistry } from "@theming/lib/layout/componentRegistry";
import { GalleryImage } from "./components/GalleryImage";
import { GalleryImageList } from "./components/GalleryImageList";
import { GalleryImageView } from "./components/GalleryImageView";
import { GalleryImageDescription } from "./components/GalleryImageView/GalleryImageDescription";
import { GalleryImagePostDate } from "./components/GalleryImageView/GalleryImagePostDate";
import { GalleryImageTitle } from "./components/GalleryImageView/GalleryImageTitle";
import { ImageScroller } from "./components/ImageScroller";
import { menus } from "./lib/menus";
import { routes } from "./lib/routes";
import { settings } from "./lib/settings";

export const module: IModule = {
    name: "gallery",
    menus,
    routes,
    settings,
};

ComponentRegistry.register(GalleryImageView);
ComponentRegistry.register(GalleryImage);
ComponentRegistry.register(GalleryImageTitle);
ComponentRegistry.register(GalleryImageDescription);
ComponentRegistry.register(GalleryImagePostDate);
ComponentRegistry.register(GalleryImageList);
ComponentRegistry.register(ImageScroller);

LayoutRegistry.register({
    name: "galleryImageView",
    displayName: "Gallery Image View",
    description: "The design of a gallery image page",
    category: "Gallery",
    subCategory: "Image",
    defaultLayout: {
        component: "Empty",
    },
    priority: 700,
});

LayoutRegistry.register({
    name: "galleryImageListItem",
    displayName: "Gallery Image List Item",
    description: "The design of an image in a gallery list",
    category: "Gallery",
    subCategory: "Image",
    defaultLayout: {
        component: "Empty",
    },
    priority: 700,
});

LayoutRegistry.register({
    name: "galleryImageList",
    displayName: "Gallery Image List",
    description: "A list of images",
    category: "Gallery",
    subCategory: "Image",
    defaultLayout: {
        component: "Empty",
    },
    priority: 700,
})
