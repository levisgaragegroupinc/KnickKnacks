//Send notificaton module
req_notification_handler = async (event) => {
  event.preventDefault();
  var req_elem = event.target;
  var provider_username;

  //enabling request notes section
  if (event.target.id === "req-svc-btn") {
    provider_username = req_elem.parentElement.children[0].textContent;
    req_elem.parentElement.nextElementSibling.style.display = "block";
    req_elem.parentElement.nextElementSibling.children[1].children[1].style.display =
      "none";
  }
  //if cancelling request, hide request form
  else if (event.target.id === "req-cancel-btn") {
    req_elem.parentElement.style.display = "none";
  }

  //upon send request, email router is called
  else if (event.target.id === "req-notes-btn") {
    const requestor_notes =
      req_elem.parentElement.children[1].children[0].value.trim();
    req_elem.parentElement.children[1].children[1].style.display = "none";
    provider_username =
      req_elem.parentElement.previousElementSibling.children[0].textContent;
    if (requestor_notes) {
      const response = await fetch("/api/request/sendemail", {
        method: "POST",
        body: JSON.stringify({ provider_username, requestor_notes }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        req_elem.parentElement.children[1].children[1].textContent =
          "Provider is notifed and will be in touch with you";
        req_elem.parentElement.children[1].children[1].style.color = "green";
        req_elem.parentElement.children[1].children[1].style.display = "block";
        setTimeout(() => {
          req_elem.parentElement.children[1].children[0].value = "";
          req_elem.parentElement.style.display = "none";
        }, 3000);
        return;
      } else {
        alert(response.statusText);
      }
    } else {
      req_elem.parentElement.children[1].children[1].style.display = "block";
    }
  } else {
    return;
  }
};
