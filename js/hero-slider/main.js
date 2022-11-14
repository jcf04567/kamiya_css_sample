import { HeroSlider } from "./hero-slider.js";

document.addEventListener('DOMContentLoaded',function(){
  const hero = new HeroSlider('.swiper');
  hero.start({delay: 3000});
});

