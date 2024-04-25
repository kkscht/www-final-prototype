document.getElementById('submit').addEventListener('click', function(event){

  event.preventDefault();  // Prevent the form from submitting traditionally
  
  // Save all form data now
  localStorage.setItem('firstName', document.getElementById('first-name').value);
  localStorage.setItem('lastName', document.getElementById('last-name').value);
  localStorage.setItem('phoneNumber', document.getElementById('phone-number').value);
  localStorage.setItem('travelInformation', document.getElementById('travel-information').value);
  localStorage.setItem('bio', document.getElementById('bio').value);
  localStorage.setItem('hobbies', document.getElementById('hobbies').value);
  localStorage.setItem('interests', document.getElementById('interests').value);
  localStorage.setItem('profilePicture', window.tempProfilePic || localStorage.getItem('profilePicture'));


  alert('Profile updated successfully!'); 
  });