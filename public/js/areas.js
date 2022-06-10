const add_area_btn_el = document.querySelector("#add-area");
const new_zipcode_input_el = document.querySelector("#new_zipcode");
const provider_username_el = document.querySelector("#prov-username");
const provider_username = prov_username.getAttribute("data-u_n");
const zip_form = new_zipcode_input_el.parentElement;

const display_error = (err_msg) => {
    const alert_p_el = document.createElement("p");
    alert_p_el.style.color = "red";
    alert_p_el.textContent = err_msg;
    zip_form.appendChild(alert_p_el);
    setTimeout(() => {
        zip_form.removeChild(alert_p_el);
    }, 3000);
}

const add_area = (event) => {
    event.preventDefault();
    const new_zip = new_zipcode_input_el.value.trim();
    if (new_zip === "") {
        display_error("Please enter a zip code");
        return;
    }
    if (new_zip.length !== 5) {
        display_error("Zip codes must be exactly 5 numbers in length");
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
            display_error("This area code is already associated with your account");
        }
    });
}