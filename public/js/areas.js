const add_area_btn_el = document.querySelector("#add-area");
const new_zipcode_input_el = document.querySelector("#new_zipcode");
const provider_username_el = document.querySelector("#prov-username");
const provider_username = prov_username.getAttribute("data-u_n");

const add_area = (event) => {
    event.preventDefault();
    const new_zip = new_zipcode_input_el.value;
    if (new_zip === "") {
        alert("Please enter a zip code");
        return;
    }
    if (new_zip.length !== 5) {
        alert("Zip codes must be 5 digits long");
        return;
    }

    const api_route = `/api/area/${username}`;
    const req_body = JSON.stringify({
        zipcode: new_zip
    });
    const fetch_body = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: req_body
    };
    fetch(api_route, fetch_body)
    .then((res) => {
        if (res.ok) {
            new_zipcode_input_el.classList.add("success");
            setTimeout(() => {
                new_zipcode_input_el.classList.remove("success");
            }, 3000);   
        } else {
            alert("This area code is already associated with your account");
        }
    });
}