import Particle from './Particle.js';
import Utils from './Utils.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const playBtn = document.getElementById('playBtn');
const select = document.getElementById('select');
const collider = document.getElementById('collider');
const active = document.getElementById('active');

let isPlaying = true;
let particlesNumber = select.value;
let particles;
let isColliderEnabled = collider.checked;

document.addEventListener('keydown', (e) =>
   e.code === 'Space' ? pauseEventHandler : null);
playBtn.addEventListener('click', pauseEventHandler);

window.addEventListener('load', setup);

window.addEventListener('resize', setCanvasSize);

select.addEventListener('change', setParticleNumber);

collider.addEventListener('change', setColliderStatus);

function setColliderStatus(e) {
   isColliderEnabled = e.target.checked;
   console.log(isColliderEnabled);
}

function setParticleNumber(e) {
   particlesNumber = e.target.value;
   createParticles();
}

function setCanvasSize() {
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
}

function createParticles() {
   particles = Array.from({ length: particlesNumber }, () => new Particle(Utils.randomNumber(1, 800), Utils.randomNumber(1, 200), Utils.randomNumber(1, 6)));
}

function setup() {
   setCanvasSize();
   createParticles();
   init();
}

function init(time) {
   if (isPlaying) {
      resetCanvas();
      particles.forEach(particle => particle.animate(ctx, isColliderEnabled));
      active.innerText = particles.length;
   }
   requestAnimationFrame(init);
}

function resetCanvas() {
   ctx.fillStyle = '#fff';
   ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function pauseEventHandler(e) {
   isPlaying = !isPlaying;
   playBtn.innerText = isPlaying ? 'pause' : 'play';
}

