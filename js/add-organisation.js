// DRY Principle: Reusable Form Submission
document.getElementById('organisationForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    // Log form data (simulates a form submission)
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  
    alert('Organisation added successfully!');
  });
  