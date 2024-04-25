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




window.onload = () => {

    

    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const phoneNumber = localStorage.getItem('phoneNumber');
    const travelInformation = localStorage.getItem('travelInformation');
    const bio = localStorage.getItem('bio');
    const hobbies = localStorage.getItem('hobbies');
    const interests = localStorage.getItem('interests');
    const profilePicture = localStorage.getItem('profilePicture');
    

    if (profilePicture) {
        document.querySelector('.profile-pic').src = profilePicture;
    }

    if (firstName) {
        document.getElementById('full-name').innerHTML = firstName;
    }
    if (lastName) {
        document.getElementById('full-name').innerHTML += ' ' + lastName;
    }
    // if (phoneNumber) {
    //     document.getElementById('phone-number').innerHTML = phoneNumber;
    // }
    if (travelInformation) {
        document.getElementById('travel-information').innerHTML = travelInformation;
    }
    if (bio) {
        document.getElementById('bio').innerHTML = bio;
    }
    if (hobbies) {
        document.getElementById('hobbies').innerHTML = hobbies;
    }
    if (interests) {
        document.getElementById('interests').innerHTML = interests;
    }
  };




    

