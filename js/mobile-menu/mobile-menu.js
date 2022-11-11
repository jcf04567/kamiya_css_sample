'use strict';

class MobileMenu {
  constructor() {
    this.Dom = {};
    this.Dom.btn = document.querySelector('.mobile-menu__btn');
    this.Dom.cover = document.querySelector('.mobile-menu__cover');
    this.Dom.global_container = document.querySelector('#global-container');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType(){
    const isTouchCapable =
    "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof window.DocumentTouch) ||
    navigator.maxTouchPoints > 0 ||
    window.navigator.msMaxTouchPoints > 0;

    return isTouchCapable ? "touchstart" : "click";
  }

  _toggle(){
    this.Dom.global_container.classList.toggle('menu-open');
  }

  _addEvent(){
    this.Dom.btn.addEventListener(this.eventType,this._toggle.bind(this));
    this.Dom.cover.addEventListener(this.eventType,this._toggle.bind(this));
  }
}

new MobileMenu();
