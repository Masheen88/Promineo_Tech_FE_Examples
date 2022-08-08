//Class to define a list of contacts
class ContactList {
  constructor(id, email, fullName) {
    this.id = id; //this is the id of the contact
    this.email = email; //this is the email of the contact
    this.fullName = fullName; //this is the full name of the contact
    this.contacts = []; //this is the array of contacts
  }

  //this is the function that creates the contact list
  addContact(contact) {
    this.contacts.push(contact); //this adds the contact to the array
  }

  //this deletes the contact from the array
  deleteContact(contact) {
    console.log("display a contact to delete:", contact);

    let contactIndex = this.contacts.indexOf(contact); //this finds the index of the contact

    console.log("displays the index of a contact contactIndex:", contactIndex);

    this.contacts.splice(contactIndex, 1); //this deletes the contact from the array
  }
}

let contacts = []; // array to hold all contacts
let contactId = 0; // defines a unique ID for each contact

onClick("submitContactButton", () => {
  console.log("List of all contacts:", contacts);

  // adds a new contact to the array
  contacts.push(
    new ContactList(
      contactId++, // defines a unique ID for each contact
      getFormValue("emailInput"), // gets the value of the email input
      getFormValue("fullNameInput") // gets the value of the full name input
    )
  );

  let newEmail = contacts.splice(-1); // removes the last contact from the array

  addContact(contactId, newEmail[0].email, newEmail[0].fullName); // adds the last contact to the table
});

// function to add event listener to submit button
function onClick(id, formAction) {
  let element = document.getElementById(id); // gets the element with the id of the button

  element.addEventListener("click", formAction); // adds a click event listener to the element

  return element; // returns the element
}

// function to get the value of the email input
function getFormValue(id) {
  let idValue = document.getElementById(id).value;
  console.log(`Value from form ${id}:`, idValue);
  return idValue;
}

// function to create a delete contact button
function createDeleteContactButton(id) {
  let btn = document.createElement("button"); // creates a button element
  btn.className = "btn btn-primary"; // adds a class to the button
  btn.setAttribute("id", id[0]); // sets the id of the button to the id of the contact
  btn.innerHTML = "Delete!"; // sets the text of the button to "Delete!"

  // adds an onclick event listener to the button
  btn.onclick = () => {
    btn.parentNode.removeChild(btn); // removes the button from the table
    let rowId = id[0]; // gets the id of the row
    document.getElementById(`table-row-${rowId}`).innerHTML = ""; // removes the row from the table
  };
  console.log("This is my button values on clicking:", btn); // logs the button to the console
  return btn; // returns the button
}

// function to add a contact to the table
function addContact(contactId, fullName, email) {
  let contactInTable = [contactId, fullName, email]; // creates an array of the contact's id, full name, and email
  console.log("Array containing contactId, fullName, email:", contactInTable); // logs the contact to the console

  let contactTable = document.getElementById("contactTable"); // gets the table element
  let contactRow = contactTable.insertRow(1); // creates a row in the table
  let contactNumber = contactRow.insertCell(-1); // creates a contact id cell in the row
  let contactFullName = contactRow.insertCell(1); // creates a contact Full Name cell in the row
  let contactEmail = contactRow.insertCell(2); // creates a contact Email cell in the row
  let contactDeleteBtn = contactRow.insertCell(3); // creates a contact Delete button cell in the row

  contactRow.setAttribute("id", `table-row-${contactId}`); // sets the id of the row to the id of the contact

  contactNumber.innerHTML = contactId; // sets the text of the contact id cell to the id of the contact
  contactFullName.innerHTML = fullName; // sets the text of the contact Full Name cell to the full name of the contact
  contactEmail.innerHTML = email; // sets the text of the contact Email cell to the email of the contact
  contactDeleteBtn.appendChild(createDeleteContactButton(contactInTable)); // adds the delete button to the contact Delete button cell
}
