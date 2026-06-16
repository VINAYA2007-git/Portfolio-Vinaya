// Toggle Button Functionality
document.addEventListener('DOMContentLoaded', function() {
  let toggleBtn = document.getElementById('toggleBtn');
  let body = document.body;

  // Check if dark mode preference is saved in localStorage
  let  savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = 'Light';
  }

  // Toggle dark mode on button click
  toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    // Update button text
    if (body.classList.contains('dark-mode')) {
      toggleBtn.textContent = 'Light';
      localStorage.setItem('darkMode', 'enabled');
    } else {
      toggleBtn.textContent = 'Dark';
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});