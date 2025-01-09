document.addEventListener('DOMContentLoaded', () => {
    // Load reusable components (header & footer)
    const loadComponent = (id, filePath) => {
      fetch(filePath)
        .then((response) => response.text())
        .then((html) => {
          document.getElementById(id).innerHTML = html;
        })
        .catch((error) => console.error(`Error loading ${filePath}:`, error));
    };
  
    loadComponent('header', 'components/header.html');
    loadComponent('footer', 'components/footer.html');
  
    // Forgot Password Form Submission
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    if (forgotPasswordForm) {
      forgotPasswordForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('emailId').value;
  
        // Mock submission logic
        alert(`Password reset link has been sent to ${email}`);
      });
    }
  });
  