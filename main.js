/* Pawsitive Pet Academy - main.js */
document.addEventListener('DOMContentLoaded', function() {
  // Quote Calculator Logic
  const calcBtn = document.getElementById('calcBtn');
  if (calcBtn) {
    calcBtn.addEventListener('click', function() {
      const checkboxes = document.querySelectorAll('input[name="course"]:checked');
      let total = 0;
      let selectedNames = [];
      
      checkboxes.forEach(function(cb) {
        total += parseInt(cb.value, 10);
        selectedNames.push(cb.getAttribute('data-name'));
      });
      
      const totalFeeElem = document.getElementById('totalFee');
      const selectedListElem = document.getElementById('selectedCoursesList');
      
      if (totalFeeElem) totalFeeElem.textContent = 'R' + total;
      if (selectedListElem) {
        selectedListElem.innerHTML = selectedNames.length > 0 
          ? '<b>Selected Courses:</b> ' + selectedNames.join(', ') 
          : '<i>No courses selected.</i>';
      }
    });
  }

  // Contact Form Error Handling & Validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const fullname = document.getElementById('fullname').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      
      const errorDiv = document.getElementById('formError');
      const successDiv = document.getElementById('formSuccess');
      
      errorDiv.textContent = '';
      successDiv.textContent = '';
      
      if (!fullname || !email || !phone) {
        errorDiv.textContent = 'Error: Please fill in all required fields (Full Name, Email Address, and Phone Number).';
        return;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errorDiv.textContent = 'Error: Please enter a valid email address format.';
        return;
      }
      
      successDiv.textContent = 'Thank you! Your information request has been successfully submitted.';
      contactForm.reset();
    });
  }
});
