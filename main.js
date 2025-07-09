// main.js

// Scroll to About section
document.getElementById('startScroll')?.addEventListener('click', () => {
  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
});

// Three.js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("three-canvas"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Scroll-based era switching
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const html = document.documentElement;
  if (scrollY < 600) {
    html.className = "modern";
  } else if (scrollY < 1200) {
    html.className = "web2010s";
  } else if (scrollY < 1800) {
    html.className = "web2000s";
  } else {
    html.className = "web90s";
  }
});
