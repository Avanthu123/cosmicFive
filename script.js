const startButton = document.getElementById('startButton');
const startSection = document.getElementById('startSection');
const modelSection = document.getElementById('modelSection');
const video = document.getElementById('homevideo');
const videoBgMusic = document.getElementById('videoBgMusic');
const modelBgMusic = document.getElementById('modelBgMusic');


videoBgMusic.play();

startButton.addEventListener('click', function () {
  startButton.classList.add('rocket-launch');

  setTimeout(() => {
    startButton.style.display = 'none';
    if (!startSection.classList.contains('hidden')) {
      startSection.classList.add('hidden');  
    }
    modelSection.scrollIntoView({ behavior: 'auto', aligntoTop: 'true' });  
    video.play(); 
    videoBgMusic.play(); 
    modelBgMusic.pause();  
  }, 1200);  
});

const homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });  
  startButton.style.display = 'flex';  
  startButton.classList.remove('rocket-launch');  
  startSection.classList.remove('hidden');  
});

document.getElementById('startButton').addEventListener('click', () => {
  document.getElementById('modelSection').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('homeButton').addEventListener('click', () => {
  document.getElementById('startSection').scrollIntoView({ behavior: 'smooth' });
});

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

const sections = document.querySelectorAll('.bg1, .bg2, .bg3, .bg4, .bg5, .bg6, .bg7, .bg8, .bg9, .bg10');

let currentSectionIndex = 0;

prevButton.addEventListener('click', () => {

  currentSectionIndex--;

  if (currentSectionIndex < 0) {
    currentSectionIndex = sections.length - 1;
  }

  sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {

  currentSectionIndex++;

  if (currentSectionIndex >= sections.length) {
    currentSectionIndex = 0;
  }

  sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth', alignToTop : 'true' });
});

function scrollToSection(sectionNumber) {
  const sections = document.querySelectorAll('.bg1, .bg2, .bg3, .bg4, .bg5, .bg6, .bg7, .bg8, .bg9, .bg10'); 
  const currentSectionElement = sections[sectionNumber]; 
  if (currentSectionElement) {
    currentSectionElement.scrollIntoView({ behavior: 'smooth' }); 
  }
}
