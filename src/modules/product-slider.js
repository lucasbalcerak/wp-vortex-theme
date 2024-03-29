import $ from 'jquery';

class Slider {

    constructor(selector, interval) {
        this.$box = $('.rectangle-item');
        this.$slider = $(selector);
        this.$slides = this.$slider.children()
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
            'position': 'absolute',
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

            $currentSlide.animate({'top': `-${this.sliderHeight}px`}, 1000, function() {
                $(this).hide();
            });
            $nextSlide.animate({'top': `${topGap}`}, 1000);

            this.currentSlide = nextSlideIndex;
        }, this.interval);
    }

}

export default Slider;