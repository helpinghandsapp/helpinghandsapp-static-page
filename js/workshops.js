function startSlideshow() {
  let slideIndex = 0;
  const slideInterval = 2000;
  const slides = document.getElementsByClassName("slideshow-items");
  const dots = document.getElementsByClassName("dot");

  // Main function to show a specific slide
  function showSlide(n) {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the selected slide and update dot
    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";

    // Update the current index
    slideIndex = n;
  }

  // Function for automatic advancement
  function advanceSlide() {
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    showSlide(slideIndex);
  }

  // Function to handle manual slide selection
  function currentSlide(n) {
    if (slideIndex !== n) {
      // Reset the interval to avoid conflicts
      clearInterval(intervalId);
      showSlide(n);

      // Restart the interval after manual selection
      intervalId = setInterval(advanceSlide, slideInterval);
    }
  }

  // Start the slideshow
  showSlide(1); // Show first slide initially

  // Store interval ID so we can clear it later
  let intervalId = setInterval(advanceSlide, slideInterval);

  // Make currentSlide available globally for HTML onclick
  window.currentSlide = currentSlide;
}
startSlideshow();
