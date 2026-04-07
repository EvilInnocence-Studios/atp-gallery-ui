import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { Index } from "ts-functional/dist/types";

export const menus: Index<ItemType<MenuItemType>[]> = {
    admin: [{
        key: "gallery",
        label: "Gallery",
        children: [{
            key: "gallery/images",
            label: "Images"
        }]
    }],
    public: [],
};
