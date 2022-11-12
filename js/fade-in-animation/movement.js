function movement(){
  let select_movement;
  const move = document.querySelector('#move');
  for (let i = 0; i < move.length; i++) {
    if (move[i].selected){
      select_movement = move[i].value;
    }
  }
  const now_movement = document.querySelector('#movement');
  if (now_movement.classList.contains('up')){
    now_movement.classList.remove('up');
  } else if (now_movement.classList.contains('down')){
    now_movement.classList.remove('down');
  } else if (now_movement.classList.contains('left')){
    now_movement.classList.remove('left');
  } else if (now_movement.classList.contains('right')){
    now_movement.classList.remove('right');
  } else {
    console.log('err 1');
    return
  }
  now_movement.classList.add(select_movement);
}

export default movement;
