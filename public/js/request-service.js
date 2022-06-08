// JS module to handle route the request for service 

const requestSvcHandler = async (event) => {
    event.preventDefault();
    const notes_container = document.getElementById('#req-container');
    notes_container.style.display = block;
};


const requestNotesHandler = async (event) => {
    event.preventDefault();

    //variables to retrieve provider_username and requestor notes
    const request_notes = document.querySelector('#request-text').value.trim();
    const provider_username = document.querySelector('#prov-username').value.trim();

    if (request_notes) {
        const response = await fetch('/request/sendemail', {
            method: 'POST',
            body: JSON.stringify({ provider_username, request_notes }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log(response);
            alert('Provider is notifed and will be in touch with you soon');
            const notes_container = document.getElementById('#req-container');
            document.querySelector('#request-text').value = '';
            notes_container.style.display = none;
        } else {
            alert(response.statusText);
        }

    } else {
        alert ('request notes can not be empty');
    };
};


document
.querySelector('#req-svc-btn')
.addEventListener('click', requestSvcHandler);

document
.querySelector('#req-notes-btn')
.addEventListener('click', requestNotesHandler);
