function add_movement() {
  document.querySelector('.appear').classList.toggle('inview');

  const add_movement_btn = document.querySelector('#add_movement_btn');
  if (add_movement_btn.innerText === 'appear') {
    add_movement_btn.innerText = 'clear';
  } else {
    add_movement_btn.innerText = 'appear';
  }
}

export default add_movement;
