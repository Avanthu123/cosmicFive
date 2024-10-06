// JavaScript to handle button click, start video, and remove elements
const startButton = document.getElementById('startButton');
const startSection = document.getElementById('startSection');
const modelSection = document.getElementById('modelSection');
const video = document.getElementById('homevideo');
const videoBgMusic = document.getElementById('videoBgMusic');
const modelBgMusic = document.getElementById('modelBgMusic');

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
homeButton.addEventListener('click', function () {
window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll to top smoothly
modelSection.classList.add('hidden');  // Hide the model section
startSection.classList.remove('hidden');  // Show the start section
videoBgMusic.play();  // Resume video background music
modelBgMusic.pause();  // Pause model background music
startButton.style.display = 'flex';  // Show the start button
startButton.classList.remove('rocket-launch');  // Remove the rocket launch animation class
});