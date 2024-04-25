document.getElementById('submit').addEventListener('click', function(event){

  event.preventDefault();  // Prevent the form from submitting traditionally

  // Save all form data now
  localStorage.setItem('userName', document.getElementById('first-name').value);
  localStorage.setItem('profilePicture', window.tempProfilePic || localStorage.getItem('profilePicture'));

  // Additional inputs can also be saved here
  // localStorage.setItem('lastName', document.getElementById('last-name').value);

  // Optionally, submit the form through AJAX here or redirect user
  alert('Profile updated successfully!');  // Just for demonstration
  });