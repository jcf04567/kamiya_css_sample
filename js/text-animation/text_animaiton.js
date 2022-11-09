'use strict';

function text_animation(){
  document.querySelector('.animate-title').classList.toggle('inview');
  const btn = document.querySelector('.btn');
  if (btn.innerHTML === "Animation") {
    btn.innerHTML = "Clear";
  } else {
    btn.innerHTML = "Animation";
  }
}
