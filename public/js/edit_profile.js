// fetch function for editing post
const editPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const textAreaData = document.querySelector('#bio-text');
    const description = textAreaData.value.trim();
    // const id = textAreaData.getAttribute('data-id')

    // getting each selected skills
  
    if (title && description) {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
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
  .querySelector('.editPost-form')
  .addEventListener('submit', editPostHandler);
  
  document
    .querySelector('.del-button')
    .addEventListener('click', delButtonHandler);
  