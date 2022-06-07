// fetch function for creating a new account (signup)
const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#first-name').value.trim();
  const last_name = document.querySelector('#last-name').value.trim();
  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  // console.log(first_name);
  // console.log(last_name);
  // console.log(username);
  // console.log(email);
  // console.log(password);

  if (first_name && last_name && username && email && password) {
    const response = await fetch('/api/sessions/sign_up', {
      method: 'POST',
      body: JSON.stringify({ username, first_name, last_name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/${username}`);
    } else {
      alert(response.statusText);
    }
  }
};


document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
