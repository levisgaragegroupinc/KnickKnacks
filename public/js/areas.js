const add_area_btn_el = document.querySelector("#add-area");
const new_zipcode_input_el = document.querySelector("#new_zipcode");
const provider_username_el = document.querySelector("#prov-username");
const provider_username = prov_username.getAttribute("data-u_n");
const zip_form = new_zipcode_input_el.parentElement;

const display_msg = (msg_todisplay,msg_type) => {
    const alert_p_el = document.createElement("p");
    if (msg_type === "error") {
        alert_p_el.style.color = "red";
    } else {
        alert_p_el.style.color = "green";
    };
    alert_p_el.textContent = msg_todisplay;
    zip_form.appendChild(alert_p_el);
    setTimeout(() => {
        zip_form.removeChild(alert_p_el);
    }, 2000);
}

const add_area = (event) => {
    event.preventDefault();
    const new_zip = new_zipcode_input_el.value.trim();
    if (new_zip === "") {
        display_msg("Please enter a zip code", "error");
        return;
    }
    if (new_zip.length !== 5) {
        display_msg("Zip codes must be exactly 5 numbers in length", "error");
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
            // new_zipcode_input_el.classList.add("success");
            display_msg("Zip code has been added successfuly!", "success");
            new_zipcode_input_el.value = "";
            setTimeout(() => {
                new_zipcode_input_el.classList.remove("success");
            }, 3000);   
        } else {
            display_msg("This area code is already associated with your account", "error");
        }
    });
}