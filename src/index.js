import "../css/style.scss";

// Modules

import Slider from "./modules/product-slider";  
import setOffset from "./modules/setOffset";
import headerGallery from "./modules/headerGallery";
import imageZoom from "./modules/gallery";

const slider = new Slider('.slider', 2000);
const leftOffset = new setOffset('.fromLeft', 'left');
const rightOffset = new setOffset('.fromBottom', 'bottom');
const bottomOffset = new setOffset('.fromRight', 'right');
const header_gallery = new headerGallery();
const image_Zoom = new imageZoom('.image');

