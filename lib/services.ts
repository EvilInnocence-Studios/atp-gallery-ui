import { IMethods } from "@core/lib/types";
import { imageServices } from "./image/services";

export const galleryServices = (methods: IMethods) => ({
    ...imageServices(methods),
});
