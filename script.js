// Toggle Button Functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggleBtn');
  const body = document.body;

  // Check if dark mode preference is saved in localStorage
  const savedMode = localStorage.getItem('darkMode');
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

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from actually submitting

    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Show alert with the entered details
    alert(`\n\nDetails Received:\n\nName: ${name}\nEmail: ${email}`);

    // Clear the form after submission
    contactForm.reset();
  });
});