// fetch function for sending search query to back end
const searchFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const searchZipCode = document.querySelector('#search-bar').value.trim();
    const searchSkill = document.querySelector('#dropdown-skill').value.trim();
  
    // console.log(email + password)
  
    if (searchZipCode) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        console.log(response.ok)
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  document
    .querySelector('#search-submit-btn')
    .addEventListener('click', searchFormHandler);
  