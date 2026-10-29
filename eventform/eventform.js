const form = document.querySelector("#ticketForm");
const personType = document.querySelector("#personType");
const idContainer = document.querySelector("#idContainer");
const id = document.querySelector("#id");
const output = document.querySelector("#output");

// showing and hiding the student id
function updateIdField() {
  const value = personType.value;

  if(value === "student") { 
    idContainer.hidden = false; 
  }
  else {
    idContainer.hidden = true;
  }
  
}

personType.addEventListener("change", updateIdField);
updateIdField();


//later date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}


form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.personType.value;
  const eventDate = form.eventDate.value;
  const id = form.id.value.trim();

  
  if(personType.value === "student") {
    if(id === "") {
        output.textContent = "Please input your student ID.";
        return;
    }
  }
 

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Request Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Event Date: ${eventDate}</p>
  <p>Person Type: ${type}</p>
  `;

  form.reset();
  updateIdField();
});
          