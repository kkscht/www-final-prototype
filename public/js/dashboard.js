var currentPageUrl = window.location.href;

// Get all nav links
var navLinks = document.querySelectorAll('nav a');

// Loop through each nav link
navLinks.forEach(function(navLink) {
    // Check if the href attribute of the nav link matches the current page URL
    if (navLink.href === currentPageUrl) {
    // If it matches, add the 'active' class to the nav link
    navLink.classList.add('active');
    }
});