import add_movement from "./add_movement.js";
import movement from "./movement.js";

window.add_movement = add_movement;

const move = document.querySelector('#move');
move.addEventListener('change',movement,false);
move.eventParm = move;

export { add_movement,movement };




