import { ClearCacheButton } from "@common/components/ClearCacheButton";
import { onInputChange } from "@core/lib/onInputChange";
import { overridable } from "@core/lib/overridable";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, Col, Input, Row, Spin, Upload } from "antd";
import { GalleryImageEditor } from "../GalleryImageEditor";
import { GalleryImageManagerProps } from "./GalleryImageManager.d";
import styles from './GalleryImageManager.module.scss';

export const GalleryImageManagerComponent = overridable(({ images, isLoading, upload, overwrite, setOverwrite, refresh, query, setQuery, classes = styles }: GalleryImageManagerProps) =>
    <Spin spinning={isLoading}>
        <Row className={classes.galleryImageManager} gutter={16}>
            <Col xs={3}>
                <h1><FontAwesomeIcon icon={faImage} /> GalleryImage</h1>
                <ClearCacheButton entity="galleryImage" cacheType="galleryImage" />
            </Col>
            <Col xs={18}>
                <Upload.Dragger customRequest={({ file }) => upload(file as File)} showUploadList={false}>
                    <p className="ant-upload-text">
                        Click or drag file to this area to upload.<br />
                        <Checkbox checked={overwrite} onClick={e => e.stopPropagation()} onChange={(e) => setOverwrite(e.target.checked)}>Overwrite</Checkbox>
                    </p>
                </Upload.Dragger>
            </Col>
            <Col xs={24}>
                <Row gutter={16} className={classes.searchRow}>
                    <Col xs={24}>
                        <Input.Search placeholder="Search..." value={query} onChange={onInputChange(setQuery)} />
                    </Col>
                </Row>
                <Row gutter={16} className={classes.galleryImageList}>
                    {images.map(image => <Col key={image.id} xs={6}>
                        <GalleryImageEditor imageId={image.id} onDelete={refresh} />
                    </Col>)}
                </Row>
            </Col>
        </Row>
    </Spin>
);
