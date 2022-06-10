const prov_username = document.querySelector('#prov-username');
const username = prov_username.getAttribute('data-u_n')
    
// fetch function for editing bio
const update_bio = async (event) => {
    event.preventDefault();
  
    const bio = document.querySelector('#bio-text').value.trim();
    
    // console.log(textarea_bio);
    // console.log(username)

    const response = await fetch(`/api/bio/${username}`, {
      method: 'POST',
      body: JSON.stringify({ bio }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to update bio');
    }
};

//  fetch function to delete a post
const edit_skills = async (event) => {
  if (event.target.hasAttribute('data-skill')) {
    const skill = event.target.getAttribute('data-skill');

    console.log(skill)
    console.log(username)
    // if adding a new skill
    if (skill !== selected){
      const response = await fetch(`/api/skill/${username}`, {
        method: 'POST',
        body: JSON.stringify({ skill }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to update skill');
      }
    }
    // if removing a skill
    else {
      const response = await fetch(`/api/skill/${username}`, {
        method: 'DELETE',
        body: JSON.stringify({ skill }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to update skill');
      }
    }
  }
};
  
  document
  .querySelector('#save-bio-btn')
  .addEventListener('click', update_bio);
  
  document
    .querySelector('.edit-skills-form')
    .addEventListener('click', edit_skills);
  