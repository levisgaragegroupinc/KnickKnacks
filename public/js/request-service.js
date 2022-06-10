//Send notificaton module
req_notification_handler = async(event) => {
    event.preventDefault();
    var req_elem = event.target;
    var provider_username;

//enabling request notes section
    if (event.target.id === 'req-svc-btn') {
        provider_username = req_elem.parentElement.children[0].textContent;
        req_elem.parentElement.nextElementSibling.style.display = "block";
    }
//upon send request, email router is called
    else if(event.target.id === 'req-notes-btn') {
        const requestor_notes = req_elem.parentElement.children[1].children[0].value.trim();
        if (requestor_notes) {
    
        const response = await fetch('/api/request/sendemail', {
            method: 'POST',
            body: JSON.stringify({ provider_username, requestor_notes}),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
    
            alert('Provider is notifed and will be in touch with you soon');
            req_elem.parentElement.children[1].children[0].value = '';
            req_elem.parentElement.style.display = "none";
            return;
        } else {
            alert(response.statusText);
        }
        } else {
        alert ('request notes can not be empty');
        };
    }
    else {return};
}
