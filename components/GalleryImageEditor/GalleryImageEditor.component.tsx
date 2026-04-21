import { DeleteBtn } from "@core/components/DeleteBtn";
import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DatePicker, Spin, Switch, Tabs, Upload } from "antd";
import { GalleryImage } from "../GalleryImage";
import { GalleryImageEditorProps } from "./GalleryImageEditor.d";
import styles from './GalleryImageEditor.module.scss';
import { overridable } from "@core/lib/overridable";
import dayjs from "dayjs";
import { EntityTagEditor } from "@common/components/EntityTagEditor";
import { services } from "@core/lib/api";

export const GalleryImageEditorComponent = overridable(({ image, isLoading, upload, updateString, updateToggle, UpdateButtons, remove, classes = styles }: GalleryImageEditorProps) =>
    <Spin spinning={isLoading}>
        <div className={classes.galleryImageEditor}>
            <div className={classes.updateButtons}>
                <Switch
                    checked={image.enabled}
                    onChange={updateToggle("enabled")}
                    checkedChildren="Enabled"
                    unCheckedChildren="Disabled"
                />
                <DeleteBtn entityType="banner" onClick={remove} />
                <UpdateButtons />
            </div>
            <Tabs
                items={[
                    {
                        key: "details",
                        label: "Details",
                        children: <>
                            <GalleryImage id={image.id} />
                            <Upload.Dragger customRequest={({ file }) => upload(file as File)} showUploadList={false}>
                                <FontAwesomeIcon icon={faRefresh} /> Replace image
                            </Upload.Dragger>
                            <Label label="Title"><Editable value={image.title} onChange={updateString("title")} /></Label>
                            <Label label="Description"><Editable value={image.description || ""} onChange={updateString("description")} /></Label>
                            <Label label="Post Date">
                                <DatePicker
                                    value={image.postDate ? dayjs(image.postDate) : null}
                                    onChange={(date) => updateString("postDate")(date ? date.toISOString() : "")}
                                    placeholder="Post Date"
                                />
                            </Label>
                        </>,
                    },
                    {
                        key: "tags",
                        label: "Tags",
                        children: <EntityTagEditor
                            type="gallery"
                            search={() => services().gallery.image.tag.search(image.id)}
                            create={(tagId: string) => services().gallery.image.tag.create(image.id, tagId)}
                            remove={(tagId: string) => services().gallery.image.tag.remove(image.id, tagId)}
                        />,
                    }
                ]}
            />
        </div>
    </Spin>
);
