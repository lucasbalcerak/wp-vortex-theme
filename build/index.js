/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.scss */ "./css/style.scss");
/* harmony import */ var _modules_product_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/product-slider */ "./src/modules/product-slider.js");
/* harmony import */ var _modules_setOffset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/setOffset */ "./src/modules/setOffset.js");
/* harmony import */ var _modules_headerGallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/headerGallery */ "./src/modules/headerGallery.js");
/* harmony import */ var _modules_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/gallery */ "./src/modules/gallery.js");


// Modules





const slider = new _modules_product_slider__WEBPACK_IMPORTED_MODULE_1__["default"]('.slider', 2000);
const leftOffset = new _modules_setOffset__WEBPACK_IMPORTED_MODULE_2__["default"]('.fromLeft', 'left');
const rightOffset = new _modules_setOffset__WEBPACK_IMPORTED_MODULE_2__["default"]('.fromBottom', 'bottom');
const bottomOffset = new _modules_setOffset__WEBPACK_IMPORTED_MODULE_2__["default"]('.fromRight', 'right');
const header_gallery = new _modules_headerGallery__WEBPACK_IMPORTED_MODULE_3__["default"]();
const image_Zoom = new _modules_gallery__WEBPACK_IMPORTED_MODULE_4__["default"]('.image');

/***/ }),

/***/ "./src/modules/gallery.js":
/*!********************************!*\
  !*** ./src/modules/gallery.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class imageZoom {
  constructor(selector) {
    this.selector = selector;
    this.fullGallery = ".full-gallery";
    this.close = "#cross";
    this.fullImage = ".full-image";
    this.next = "#next";
    this.prev = "#prev";
    this.photo = "";
    this.init();
  }
  init() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.selector).on('click', event => this.toggleZoom(event));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.close).on('click', event => this.toggleZoom(event));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.next).on('click', event => this.nextImage(event));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.prev).on('click', event => this.prevImage(event));
  }
  toggleZoom() {
    this.photo = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).attr('src');
    console.log(this.photo);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.fullGallery).toggleClass('hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.fullImage).attr('src', this.photo);
  }
  nextImage() {
    let currentImgIndex = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.image-container img[src="' + this.photo + '"]').parent().index();
    let nextImgIndex = currentImgIndex + 1;
    if (nextImgIndex >= jquery__WEBPACK_IMPORTED_MODULE_0___default()('.image-container img').length) {
      nextImgIndex = 0;
    }
    let nextImage = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.image-container img').eq(nextImgIndex).attr('src');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.fullImage).attr('src', nextImage);
    this.photo = nextImage;
  }
  prevImage() {
    let currentImgIndex = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.image-container img[src="' + this.photo + '"]').parent().index();
    let prevImgIndex = currentImgIndex - 1;
    if (prevImgIndex < 0) {
      prevImgIndex = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.image-container img').length - 1;
    }
    let prevImage = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.image-container img').eq(prevImgIndex).attr('src');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.fullImage).attr('src', prevImage);
    this.photo = prevImage;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageZoom);

/***/ }),

/***/ "./src/modules/headerGallery.js":
/*!**************************************!*\
  !*** ./src/modules/headerGallery.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class headerGallery {
  constructor() {
    this.divs = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.photo-animation');
    this.imageUrls = this.getPhotoData();
    this.currentIndex = 0;
    this.initGallery();
    this.rotateGallery();
    this.rotateGalleryPhoto();
    this.upperDivs = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.on-top');
  }
  getPhotoData() {
    let imageUrls = new Array();
    if (typeof photoData !== 'undefined' && photoData.urls.length > 0) {
      photoData.urls.forEach(function (url) {
        imageUrls.push(url);
      });
    }
    return imageUrls;
  }
  initGallery() {
    this.divs.each((index, div) => {
      const imageUrl = this.imageUrls[this.currentIndex];
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(div).css({
        'background-image': `url('${imageUrl}')`
      });
      this.currentIndex++;
    });
  }
  rotateGallery() {
    let counter = 1;
    setInterval(() => {
      this.divs.each((index, div) => {
        const imageUrl = this.imageUrls[this.currentIndex];
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(div).hasClass('on-bottom')) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(div).removeClass('on-bottom');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(div).addClass('on-bottom');
        }
      });
    }, 5000);
  }
  rotateGalleryPhoto() {
    setTimeout(() => {
      setInterval(() => {
        this.divs.each((index, div) => {
          const imageUrl = this.imageUrls[this.currentIndex];
          if ((index + 1) % 2 == 0) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(div).css({
              'background-image': `url('${imageUrl}')`
            });
            this.currentIndex++;
            if (this.currentIndex >= this.imageUrls.length) {
              this.currentIndex = 0;
            }
          }
        });
      }, 10000);
    }, 5000);
    setInterval(() => {
      this.divs.each((index, div) => {
        const imageUrl = this.imageUrls[this.currentIndex];
        if ((index + 1) % 2 !== 0) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(div).css({
            'background-image': `url('${imageUrl}')`
          });
          this.currentIndex++;
          if (this.currentIndex >= this.imageUrls.length) {
            this.currentIndex = 0;
          }
        }
      });
    }, 10000);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerGallery);

/***/ }),

/***/ "./src/modules/product-slider.js":
/*!***************************************!*\
  !*** ./src/modules/product-slider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class Slider {
  constructor(selector, interval) {
    this.$box = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.rectangle-item');
    this.$slider = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector);
    this.$slides = this.$slider.children();
    this.currentSlide = 0;
    this.interval = interval;
    this.sliderHeight = this.$slider.height();
    this.numberOfSlides = this.$slides.length;
    this.topGapStart = `${(this.$box.height() - this.$slides.height()) / 2}px`;
    this.initSlider();
  }
  initSlider() {
    this.$slider.css('position', 'relative');
    this.$slides.css({
      'position': 'absolute'
    }).hide();
    this.$slides.first().show().css('top', `${this.topGapStart}`);
    this.startSlider();
  }
  startSlider() {
    setInterval(() => {
      const $currentSlide = this.$slides.eq(this.currentSlide);
      let nextSlideIndex = (this.currentSlide + 1) % this.numberOfSlides;
      const $nextSlide = this.$slides.eq(nextSlideIndex);
      let topGap = `${(this.$box.height() - $nextSlide.height()) / 2}px`;
      $nextSlide.css('top', `${this.sliderHeight}px`).show();
      $currentSlide.animate({
        'top': `-${this.sliderHeight}px`
      }, 1000, function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hide();
      });
      $nextSlide.animate({
        'top': `${topGap}`
      }, 1000);
      this.currentSlide = nextSlideIndex;
    }, this.interval);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

/***/ }),

/***/ "./src/modules/setOffset.js":
/*!**********************************!*\
  !*** ./src/modules/setOffset.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class setOffset {
  constructor(selector, $side) {
    this.$divToAnimate = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector);
    this.side = $side;
    this.width = 1.1 * this.$divToAnimate.width();
    this.height = 1.1 * this.$divToAnimate.height();
    this.initOffset();
  }
  initOffset() {
    if (this.side == 'bottom' || this.side == 'top') {
      this.$divToAnimate.css(this.side, `-${this.height}px`);
    } else if (this.side == 'left' || this.side == 'right') {
      this.$divToAnimate.css(this.side, `-${this.width}px`);
    } else {
      console.log('side should be top, bottom, left or right');
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setOffset);

/***/ }),

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["jQuery"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwp_scripts"] = globalThis["webpackChunkwp_scripts"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map