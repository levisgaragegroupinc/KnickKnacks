// fetch function for editing post
const update_bio = async (event) => {
    event.preventDefault();
  
    const textarea_bio = document.querySelector('#bio-text').value.trim();
    const username_data = document.querySelector('.profile-container-white') ;
    const username = username_data.getAttribute('data-id');
  
    console.log(textarea_bio);
    console.log(username);
    
    // const response = await fetch(`/api/bio/${username}`, {
    //   method: 'POST',
    //   body: JSON.stringify({ textarea_bio }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });

    // if (response.ok) {
    //   document.location.reload();
    // } else {
    //   alert('Failed to create project');
    // }
};

  //  fetch function to delete a post
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
  .querySelector('#save-bio-btn')
  .addEventListener('click', update_bio);
  
  document
    .querySelector('.del-button')
    .addEventListener('click', delButtonHandler);
  