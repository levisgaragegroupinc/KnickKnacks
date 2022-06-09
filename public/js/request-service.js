// JS module to handle route the request for service 

const requestSvcHandler = async (event) => {
    event.preventDefault();
    document.getElementById('req-container').style.display = "block";
};


const requestNotesHandler = async (event) => {
    event.preventDefault();

    //variables to retrieve provider_username and requestor notes
    const request_notes = document.getElementById('request-text');
    const provider_username = document.getElementById('prov-username');

    //Post to send email notification 
    if (request_notes) {
        const response = await fetch('/api/request/sendemail', {
            method: 'POST',
            body: JSON.stringify({ provider_username, request_notes }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log(response);
            alert('Provider is notifed and will be in touch with you soon');
            document.getElementById('req-container').style.display = "none";
            document.getElementById('request-text').value = '';
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
