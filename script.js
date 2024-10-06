// JavaScript to handle button click, start video, and remove elements
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

  // After animation, show video and hide the button
  setTimeout(() => {
    startButton.style.display = 'none'; // Hide the button
    startSection.classList.add('hidden');  // Hide the start section
    modelSection.classList.remove('hidden');  // Show the model section after the delay
    video.play();  // Start the video
    videoBgMusic.play();  // Resume video background music
    modelBgMusic.pause();  // Pause model background music
  }, 2000);  // Wait for rocket launch animation to finish
});

// Home button click scrolls back to the top and shows the start section
const homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll to top smoothly
  modelSection.classList.add('hidden');  // Hide the model section
  startSection.classList.remove('hidden');  // Show the start section
  videoBgMusic.play();  // Resume video background music
  modelBgMusic.pause();  // Pause model background music
  startButton.style.display = 'flex';  // Show the start button
  startButton.classList.remove('rocket-launch');  // Remove the rocket launch animation class
});

// ...

// Navigation buttons functionality
let currentSection = 0; // Initialize current section to 0

prevButton.addEventListener('click', function () {
  if (currentSection > 0) {
    currentSection--; // Decrement current section
    showSection(currentSection); // Show previous section
  }
});

nextButton.addEventListener('click', function () {
  if (currentSection < 2) { // Assuming there are 3 sections (bg1, bg2, etc.)
    currentSection++; // Increment current section
    showSection(currentSection); // Show next section
  }
});

function showSection(sectionNumber) {
  const sections = document.querySelectorAll('.bg1, .bg2'); // Get all sections with class "bg1" and "bg2"
  sections.forEach((section) => {
    section.classList.add('hidden'); // Hide all sections
  });
  const currentSectionElement = sections[sectionNumber]; // Get current section element
  if (currentSectionElement) {
    currentSectionElement.classList.remove('hidden'); // Show current section
  }
}