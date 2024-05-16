import $ from 'jquery';

class imageZoom {
    constructor(selector) {
        this.selector = selector;
        this.fullGallery = ".full-gallery";
        this.close = "#cross"
        this.fullImage = ".full-image"
        this.next = "#next"
        this.prev = "#prev"
        this.photo = "";
        this.init();
    }

    init(){
        $(this.selector).on('click', (event) => this.toggleZoom(event));
        $(this.close).on('click', (event) => this.toggleZoom(event));
        $(this.next).on('click', (event) => this.nextImage(event));
        $(this.prev).on('click', (event) => this.prevImage(event));
    }

    toggleZoom() {
        this.photo = $(event.target).attr('src');
        console.log(this.photo);
        $(this.fullGallery).toggleClass('hidden');
        $(this.fullImage).attr('src', this.photo);
    }

    nextImage() {
        let currentImgIndex = $('.image-container img[src="' + this.photo + '"]').parent().index();
        let nextImgIndex = currentImgIndex + 1;
        if(nextImgIndex >= $('.image-container img').length) {
            nextImgIndex = 0;
        }
        let nextImage = $('.image-container img').eq(nextImgIndex).attr('src');
        $(this.fullImage).attr('src', nextImage);
        this.photo = nextImage;
    }

    prevImage() {
        let currentImgIndex = $('.image-container img[src="' + this.photo + '"]').parent().index();
        let prevImgIndex = currentImgIndex - 1;
        if(prevImgIndex < 0) {
            prevImgIndex = $('.image-container img').length - 1;
        }
        let prevImage = $('.image-container img').eq(prevImgIndex).attr('src');
        $(this.fullImage).attr('src', prevImage);
        this.photo = prevImage;
    }



}

export default imageZoom;