import $ from 'jquery';

class setOffset {
    constructor(selector, $side) {
        this.$divToAnimate = $(selector);
        this.side = $side
        this.width = 1.1 * this.$divToAnimate.width();
        this.height = 1.1 * this.$divToAnimate.height();
    
        this.initOffset();
    }

    initOffset() {
        if(this.side == 'bottom' || this.side == 'top') {
            console.log(`-${this.height}px`);
            this.$divToAnimate.css(this.side, `-${this.height}px`);    
        } else if(this.side == 'left' || this.side == 'right'){
            console.log(`-${this.width}px`);
            this.$divToAnimate.css(this.side, `-${this.width}px`);
        } else {
            console.log('side should be top, bottom, left or right');
        }   
    }
}

export default setOffset;