var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
const heroSection = document.getElementById("herosection");
camera.position.set(0, 25, 200);
var renderer = new THREE.WebGLRenderer({
  antialias: true,
 // alpha: true // Enable alpha for transparency
});

renderer.setSize(window.innerWidth, window.innerHeight);


heroSection.appendChild(renderer.domElement);
window.addEventListener( 'resize', function(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}, false );

// var controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.minPolarAngle = THREE.Math.degToRad(80);
// controls.maxPolarAngle = THREE.Math.degToRad(87);
// controls.minDistance = 100;
// controls.maxDistance = 250;
// controls.enablePan = false;


var speed = 0.18; // 1 is normal speed
var pWidth = 100;
var pHeight = 100;
var planeGeom = new THREE.PlaneBufferGeometry(500, 500, pWidth, pHeight).toGrid();
planeGeom.rotateX(-Math.PI * .5);

var seaDown = new THREE.LineSegments(planeGeom, new THREE.ShaderMaterial({
  uniforms: {
    color: {
      value: new THREE.Color("#db39d6")
    },
    opacity: {
      value: 1
    },
    time: {
      value: 0
    },
    amplitude: {
      value: 0
    },
    waveLength: {
      value: Math.PI * 10
    }
  },
  vertexShader: vertShader,
  fragmentShader: fragShader,
}));
scene.add(seaDown);

var clock = new THREE.Clock();
var t = 0;
var delta = 0;
render();

function render() {

  requestAnimationFrame(render);
  delta = clock.getDelta();
  t += delta *  speed;

  seaDown.material.uniforms.time.value = t;
    //seaDown.material.uniforms.amplitude.value = 10 * Math.sin(t); // You can adjust the amplitude factor as needed
  scene.rotation.y += delta *  0.06;
    //camera.position.z -= t * 0.5;
    renderer.setClearColor(0xff0000, 0);
  renderer.render(scene, camera);

}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function createRandomStars(){
  const numStars = getRandomInt(15, 30);

  for (let i = 0; i < numStars; i++) {
     const star = `<svg class="h-10 w-10 herostar" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.68 16.68"><defs><style>.cls-1{isolation:isolate;}.cls-2{fill:url(#radial-gradient);mix-blend-mode:color-dodge;stroke-width:0px;}</style><radialGradient id="radial-gradient" cx="8.34" cy="8.34" fx="8.34" fy="8.34" r="8.34" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset=".01" stop-color="#f7f5f8" stop-opacity=".96"/><stop offset=".05" stop-color="#cfc7da" stop-opacity=".78"/><stop offset=".1" stop-color="#aa9cbd" stop-opacity=".61"/><stop offset=".15" stop-color="#8977a3" stop-opacity=".47"/><stop offset=".2" stop-color="#6d568e" stop-opacity=".34"/><stop offset=".26" stop-color="#563b7b" stop-opacity=".23"/><stop offset=".32" stop-color="#43256d" stop-opacity=".15"/><stop offset=".4" stop-color="#341461" stop-opacity=".08"/><stop offset=".49" stop-color="#2a0859" stop-opacity=".03"/><stop offset=".63" stop-color="#240155" stop-opacity="0"/><stop offset=".99" stop-color="#230054" stop-opacity="0"/></radialGradient></defs><g class="cls-1"><g id="Layer_2"><g id="BACKGROUND_2"><circle class="cls-2" cx="8.34" cy="8.34" r="8.34"/></g></g></g></svg>`;
   
     const container = document.createElement('div');
     container.innerHTML = star;

     const top = getRandomInt(0, 40);
     const left = getRandomInt(0, 100);

     const puslseSeconds = getRandomInt(1,3);
    container.classList.add("h-10","w-10",`animate-[pulse_${puslseSeconds}s_ease-in-out_infinite]`);
    container.style.position = "absolute";
    container.style.top = `${top}%`;
    container.style.left = `${left}%`;
   
    heroSection.appendChild(container);
}
}

createRandomStars();