// fetch function for sending search query to back end
const searchFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from search bar
    const searched_zipcode = document.querySelector('#search-bar').value.trim();
    var searched_skill = document.querySelector('#skill-list-options').value.trim();
 
    // if search button is clicked without selecting a skill or providing a zipcode, do nothing
    if (searched_skill == "Select skill" && !searched_zipcode) {
        return
    };

    console.log(searched_skill);
    console.log(!searched_zipcode);
    // when only searching a skill
    if (searched_skill !== "Select skill" && !searched_zipcode) {
        
        // Send a GET request to the API endpoint
        let route = `/results/skill/${searched_skill}`;

        const response = await fetch(route, {
            method: 'GET',
        });
    
        if (response.ok) {
            console.log(response.ok)
        } else {
            alert(response.statusText);
        }
    };

    // when only searching a zipcode
    if (searched_skill == "Select skill" && searched_zipcode) {
        // verify zipcode is a number and contains 5 digits
        if (searched_zipcode.length != 5 || isNaN(searched_zipcode) === true) {
            alert("ZIP code must be five numerical digits long");
            return
        } else{
            // Send a GET request to the API endpoint
            let route = `/results/zipcode/${searched_zipcode}`;

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
    .querySelector('#search-submit-btn')
    .addEventListener('click', searchFormHandler);
  