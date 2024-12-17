// Snowflake generator function
function createSnowflake() {
  var snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.innerHTML = '&#10052;';  // Snowflake unicode character
  document.body.appendChild(snowflake);

  // Randomize position and size
  snowflake.style.left = Math.random() * 100 + 'vw'; // Position from 0 to 100% of viewport width
  snowflake.style.animationDuration = Math.random() * 20 + 10 + 's'; // Random duration between 10s and 20s (slower fall)
  snowflake.style.fontSize = Math.random() * 20 + 20 + 'px'; // Random font size (between 15px and 20px)

  // Remove snowflake after it falls out of view
  setTimeout(function() {
    snowflake.remove();
  }, 20000); // Remove snowflake after 20s (adjust based on the animation duration)
}

// Determine if the device is mobile or desktop
function isMobile() {
  return window.innerWidth <= 768; // Check if screen width is 768px or less (common mobile breakpoint)
}

// Adjust snowflake generation frequency based on device type
function generateSnowflakes() {
  if (isMobile()) {
    // On mobile, generate fewer snowflakes
    setInterval(createSnowflake, 1500); // Generate snowflakes every 1.5 seconds
  } else {
    // On larger screens, generate more snowflakes
    setInterval(createSnowflake, 750); // Generate snowflakes every 0.75 second
  }
}

// Start generating snowflakes based on device type
generateSnowflakes();
