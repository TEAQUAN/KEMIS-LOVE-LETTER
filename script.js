document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelope'); // Envelope container
  const flap = document.querySelector('.flap'); // The top flap of the envelope
  const letter = document.getElementById('letter'); // The letter element
  const resetBtn = document.getElementById('reset'); // Reset button

  // Debugging to check if elements are found
  console.log("Envelope:", envelope);
  console.log("Flap:", flap);
  console.log("Letter:", letter);
  console.log("Reset Button:", resetBtn);

  // Ensure all elements are present
  if (!envelope || !flap || !letter || !resetBtn) {
    console.error('One or more elements are missing from the DOM.');
    return;
  }

  envelope.addEventListener('click', () => {
    console.log("Envelope clicked");
    flap.style.transform = 'rotateX(-180deg)'; // Animate the flap
    letter.style.transform = 'translateY(0)'; // Slide the letter out
    console.log("Flap transform:", flap.style.transform);
console.log("Letter transform:", letter.style.transform);

  });

  resetBtn.addEventListener('click', () => {
    console.log("Reset button clicked");
    flap.style.transform = 'rotateX(0deg)'; // Reset flap animation
    letter.style.transform = 'translateY(100%)'; // Hide the letter
  });
});
