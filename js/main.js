let speed=0.2;
initScene();
loadCar();
function animate(){
  requestAnimationFrame(animate);
  if(carModel){
      carModel.position.z-=speed;
      if(keys['a']) carModel.position.x-=0.1;
      if(keys['d']) carModel.position.x+=0.1;
      carModel.position.x+=joyX*0.05;
      camera.position.x=carModel.position.x;
      camera.position.z=carModel.position.z+6;
      camera.lookAt(carModel.position);
      document.getElementById('speed').innerText=speed.toFixed(2);
      scene.children.forEach(obj=>{if(obj.name==='enemy' && carModel.position.distanceTo(obj.position)<2) askQuestion(obj);});
  }
  renderer.render(scene,camera);
}
