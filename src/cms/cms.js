import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import AvailablePostPreview from "./preview-templates/AvailablePostPreview";
import CollectionPostPreview from "./preview-templates/CollectionPostPreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("available", AvailablePostPreview);
CMS.registerPreviewTemplate("collection", CollectionPostPreview);

CMS.registerPreviewStyle("../scss/main.scss");
