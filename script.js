const startButton = document.getElementById('startButton');
const startSection = document.getElementById('startSection');
const modelSection = document.getElementById('modelSection');
const video = document.getElementById('homevideo');
const videoBgMusic = document.getElementById('videoBgMusic');
const modelBgMusic = document.getElementById('modelBgMusic');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Start video background music on page load
videoBgMusic.play();

startButton.addEventListener('click', function () {
  // Add rocket launch animation
  startButton.classList.add('rocket-launch');

  // After animation, show video and scroll to the model section
  setTimeout(() => {
    startButton.style.display = 'none'; // Hide the button
    startSection.classList.add('hidden');  // Hide the start section
    modelSection.scrollIntoView({ behavior: 'smooth' });  // Scroll smoothly to the model section
    video.play();  // Start the video
    videoBgMusic.play();  // Resume video background music
    modelBgMusic.pause();  // Pause model background music
  }, 1500);  // Wait for rocket launch animation to finish
});

// Home button click scrolls back to the top and shows the start section
const homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll to top smoothly
  startButton.style.display = 'flex';  // Show the start button
  startButton.classList.remove('rocket-launch');  // Remove the rocket launch animation class
});

// Navigation buttons functionality
let currentSection = 0; // Initialize current section to 0

prevButton.addEventListener('click', function () {
  if (currentSection > 0) {
    currentSection--; // Decrement current section
    scrollToSection(currentSection); // Scroll to previous section
  }
});

nextButton.addEventListener('click', function () {
  if (currentSection < 11) { // Assuming there are 3 sections (bg1, bg2, etc.)
    currentSection++; // Increment current section
    scrollToSection(currentSection); // Scroll to next section
  }
});

function scrollToSection(sectionNumber) {
  const sections = document.querySelectorAll('.bg1, .bg2, .bg3, .bg4, .bg5, .bg6, .bg7, .bg8, .bg9, .bg10'); // Get all sections with class "bg1" and "bg2"
  const currentSectionElement = sections[sectionNumber]; // Get current section element
  if (currentSectionElement) {
    currentSectionElement.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the current section
  }
}
