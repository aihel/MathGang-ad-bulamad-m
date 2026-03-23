let scene, camera, renderer, carModel;
let wheels = [];
function loadCar(){
  const mtlLoader = new THREE.MTLLoader();
  mtlLoader.load('assets/cars/Audi_R8_2017.mtl', function(materials) {
      materials.preload();
      const objLoader = new THREE.OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load('assets/cars/Audi_R8_2017.obj', function(object) {
          object.scale.set(1.5,1.5,1.5);
          object.position.set(0,0,0);
          scene.add(object);
          carModel = object;
          object.traverse((child)=>{
              if(child.name.toLowerCase().includes('wheel')) wheels.push(child);
          });
      });
  });
}

function initScene(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(innerWidth,innerHeight);
  document.body.appendChild(renderer.domElement);
  const light = new THREE.DirectionalLight(0xffffff,1);
  light.position.set(5,10,5);
  scene.add(light);
  // Yol ve basit binalar
  const road = new THREE.Mesh(new THREE.PlaneGeometry(20,200), new THREE.MeshStandardMaterial({color:0x333333}));
  road.rotation.x=-Math.PI/2; scene.add(road);
  for(let i=0;i<50;i++){
      let b = new THREE.Mesh(new THREE.BoxGeometry(2,Math.random()*5+2,2), new THREE.MeshStandardMaterial({color:0x4444ff}));
      b.position.set((Math.random()>0.5?6:-6),2,i*-10); scene.add(b);
  }
}
