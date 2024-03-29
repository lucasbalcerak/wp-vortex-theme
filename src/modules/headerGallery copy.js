import $ from 'jquery';

class headerGallery {
    constructor() {
        this.divs = $('.photo-animation');
        this.currentIndex = 0;
        this.imageUrls = this.getPhotoData()
        this.setupInitialStyles();
        this.updateBackground();
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

    rotateBackgrounds() {

        this.updateBackground();

        setInterval(() => {
            this.updateBackground();
        }, 5000);
    }

    setupInitialStyles() {
        this.divs.each((index, div) => {
            const imageUrl = this.imageUrls[this.currentIndex % this.imageUrls.length];

            $(div).css({
                'background-image': `url('${imageUrl})`
            });
            this.currentIndex++;
        });
    }

    updateBackground() {
        setInterval(() => {
            this.divs.each((index, div) => {

                const nextImageUrl = this.imageUrls[this.currentIndex % this.imageUrls.length];

                $(div).animate({ 'opacity': '0' }, 1000, function () {
                    $(this).css('background-image', `url('${nextImageUrl}')`).animate({ 'opacity': '1' });
                });
            });

            this.currentIndex++;

            if (this.currentIndex >= this.imageUrls.length) {
                this.currentIndex = 0;
            }

        }, 5000)
    }
}

export default headerGallery;