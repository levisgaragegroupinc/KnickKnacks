const prov_username = document.querySelector('#prov-username');
const username = prov_username.getAttribute('data-u_n');
    
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

//  fetch function to update skills
const edit_skills = async (event) => {
  if (event.target.hasAttribute('data-skill')) {
    const skill = event.target.getAttribute('data-skill');

    const is_selected = event.target.getAttribute('class');

    console.log(skill);
    console.log(username);
    console.log(is_selected);
    console.log(is_selected == 'checkbox-container check-button-default')

    // if adding a new skill
    if (is_selected == 'checkbox-container check-button-default'){
      const response = await fetch(`/api/skill/${username}`, {
        method: 'POST',
        body: JSON.stringify({ skill }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        console.log(response)
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
        document.location.replace('/profile');
      } else {
        alert('Failed to delete skill');
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
  