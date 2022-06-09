// fetch function for editing post
const update_bio = async (event) => {
    event.preventDefault();
  
    const textarea_bio = document.querySelector('#bio-text');
    const description = textarea_bio.value.trim();
    const username = textarea_bio.getAttribute('data-id')
  
    if (title && description) {
      const response = await fetch(`/api/bio/${username}`, {
        method: 'POST',
        body: JSON.stringify({ description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
//   test
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create project');
      }
    }
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
  