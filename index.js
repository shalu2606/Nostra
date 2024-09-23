// step-1

// Offer bar close button
var offerBar = document.getElementById("offerbar-open");
var offerClose = document.getElementById("offer-close");

offerClose.addEventListener("click", function () {
    offerBar.style.display = "none"; // This works correctly to close the offer bar
});

// Side navbar functionality
var sideNavMenu = document.getElementById("navbar-activate");
var sideNavBar = document.getElementById("sidenavbar");

// Activate side navbar on click
sideNavMenu.addEventListener("click", function () {
    sideNavBar.style.left = "0"; // Slide the navbar into view (left: 0)
});

// Close side navbar on click
document.getElementById("side-navbar-close").addEventListener("click", function () {
    sideNavBar.style.left = "-50%"; // Hide the navbar by sliding it out of view (left: -50%)
});


// step-2


// Slider functionality
var sliderLeftButton = document.getElementById("slider-left-activate");
var sliderRightButton = document.getElementById("slider-right-activate");
var sliderImage = document.querySelector(".slider-image-container");
var sliderMargin = 0; // Initial margin
var totalImages = document.querySelectorAll(".slider-image").length; // Get the total number of images
var maxMargin = (totalImages - 1) * 100; // Adjust the max margin based on the number of images

// Move slider to the right
sliderRightButton.addEventListener("click", function () {
    sliderMargin += 100; // Move to the next slide

    if (sliderMargin > maxMargin) {
        sliderMargin = 0; // If at the last slide, loop back to the first slide
    }

    sliderImage.style.marginLeft = `-${sliderMargin}vw`; // Move the slider
});

// Move slider to the left
sliderLeftButton.addEventListener("click", function () {
    sliderMargin -= 100; // Move to the previous slide

    if (sliderMargin < 0) {
        sliderMargin = maxMargin; // If at the first slide, loop back to the last slide
    }

    sliderImage.style.marginLeft = `-${sliderMargin}vw`; // Move the slider
});

