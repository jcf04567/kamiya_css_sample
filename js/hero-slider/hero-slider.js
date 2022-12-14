export class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper(this.el);
  }

  _initSwiper(el) {
    console.log(el);
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      // effect: 'fade',
      grabCursor:true,
      effect: 'coverflow',
      centeredSlides:true,
      slidesPerView:1,
      speed:1000,
      breakpoints: {
        1024: {
          slidesPerView:2,
        }
      },
    });
  }
  start(options = {}){
    options = Object.assign({
      delay:4000,
      disableOnInteraction:false
    },options)
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop(){
    this.swiper.autoplay.stop();
  }
}
