import $ from 'jquery';

class headerGallery {
    constructor() {

        this.divs = $('.photo-animation');
        this.imageUrls = this.getPhotoData();
        this.currentIndex = 0;
        this.initGallery();
        this.rotateGallery();
        this.rotateGalleryPhoto();
        this.upperDivs = $('.on-top');
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
            $(div).css({
                'background-image': `url('${imageUrl}')`
            })
            this.currentIndex++;

        })
    }

    rotateGallery() {
        let counter = 1;
        setInterval(() => {
            this.divs.each((index, div) => {
                const imageUrl = this.imageUrls[this.currentIndex];
                
                if($(div).hasClass('on-bottom')) {
                    $(div).removeClass('on-bottom');
                } else {
                    $(div).addClass('on-bottom');
                }
            })
        }, 5000)
    }

    rotateGalleryPhoto() {
        setTimeout(() => {
            setInterval(() => {
                this.divs.each((index, div) => {
                    const imageUrl = this.imageUrls[this.currentIndex];
    
                    if((index + 1) % 2 == 0){
                        $(div).css({
                            'background-image': `url('${imageUrl}')`
                        })
                        
                        this.currentIndex++;
        
                        if(this.currentIndex >= this.imageUrls.length){
                            this.currentIndex = 0;
                        }
                    }    
                })    
            }, 10000)
        }, 5000)

        setInterval(() => {
            this.divs.each((index, div) => {
                const imageUrl = this.imageUrls[this.currentIndex];

                if((index + 1) % 2 !== 0){
                    $(div).css({
                        'background-image': `url('${imageUrl}')`
                    })
                    
                    this.currentIndex++;
    
                    if(this.currentIndex >= this.imageUrls.length){
                        this.currentIndex = 0;
                    }
                }    
            })    
        }, 10000)
    }
}


export default headerGallery;
