// fetch function for sending search query to back end
const searchFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from search bar
    const searched_zipcode = document.querySelector('#search-bar').value.trim();
    var searched_skill = document.querySelector('#skill-list-options').value.trim();
 
   

    // when searching a zipcode and skill
    if (searched_skill !== "Select skill" && searched_zipcode) {
        // verify zipcode is a number and contains 5 digits
        if (searched_zipcode.length != 5 || isNaN(searched_zipcode) === true) {
            alert("ZIP code must be five numerical digits long");
            return
        } else{
            // Send a GET request to the API endpoint
            let route = `/results/zip_skill/${searched_zipcode}/${searched_skill}`;

            const response = await fetch(route, {
                method: 'GET',
            });
        
            if (response.ok) {
                console.log(response.ok)
            } else {
                alert(response.statusText);
            }
        }
    };
  };
  
  
  document
    .querySelector('#skills-form')
    .addEventListener('submit', searchFormHandler);
  