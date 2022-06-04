// fetch function for logging in
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/sessions/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      console.log(response.ok)
      document.location.replace(`/${username}`);
    } else {
      alert(response.statusText);
    }
  }
};


document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
