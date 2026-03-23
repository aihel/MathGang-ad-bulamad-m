let keys={}, joyX=0, joystickActive=false;
document.getElementById('pcBtn').onclick=()=>startGame('pc');
document.getElementById('mobileBtn').onclick=()=>startGame('mobile');
function startGame(mode){
  document.getElementById('menu').style.display='none';
  if(mode==='mobile') document.getElementById('joystick').style.display='block';
  animate();
}
window.onkeydown=e=>keys[e.key.toLowerCase()]=true;
window.onkeyup=e=>keys[e.key.toLowerCase()]=false;
const joy=document.getElementById('joystick');
const stick=document.getElementById('stick');
joy.addEventListener('touchstart',()=>joystickActive=true);
joy.addEventListener('touchend',()=>{joystickActive=false;joyX=0;stick.style.left='35px';});
joy.addEventListener('touchmove',e=>{
  if(!joystickActive) return;
  let t=e.touches[0];
  let rect=joy.getBoundingClientRect();
  let x=t.clientX-rect.left-60;
  joyX=x/40; stick.style.left=(35+x)+'px';
});
