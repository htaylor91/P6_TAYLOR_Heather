
const body = document.getElementById('body');
const displayModalBtn = document.getElementById('displayModal');
const mainSection = document.getElementById('mainSection');
const modalDialog = document.getElementById('contact_modal');
const modalTitle = document.getElementById('modalTitle');
const closeModalBtn = document.getElementById('closeModal');

function displayModal() {
    modalDialog.style.display = "block";
    mainSection.setAttribute("aria-hidden", 'true');
    mainSection.setAttribute("tab-index", '-1');
    modalDialog.setAttribute("aria-hidden", 'false');
    body.setAttribute("class", 'noScroll');
    closeModalBtn.focus();
}

function closeModal() {
    modalDialog.style.display = "none";
    mainSection.setAttribute("aria-hidden", "false");
    modalDialog.setAttribute("aria-hidden", 'true');
    body.removeAttribute("class", 'noScroll');
    const displayModalBtn = document.getElementById('displayModal');
    displayModalBtn.focus();
}

 // Close modal when escape key is pressed
document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
        closeModal();
	}
});

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const textArea = document.getElementById("textarea");
const regexName = /^(?=.{2,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validFirstName() {
    console.log(firstName.value);
    if (firstName.value.trim().match(regexName)) {
        return true;
    }
    return false;
}

function validLastName() {
    console.log(lastName.value);
    if (lastName.value.trim().match(regexName)) {
        return true;
    }
    return false;
}
  
function validEmail() {
    console.log(email.value);
    if (email.value.trim().match(regexEmail)) {
        return true;
    }
    return false;
}

function validTextArea() {
    console.log(textArea.value);
    if(textArea.value.trim() != '') {
        return true;
    }
    return false;
}

function validate(){
    event.preventDefault();
    let valid = false;
  //The if statement below checks each input validation function to see if it returns true.
  //If ALL of the input functions from the form return true, then valid = true.
    if(validFirstName() && 
        validLastName() && 
        validEmail() && 
        validTextArea()){
      valid = true;
    }
  //If valid = true, then the form is valid, and the form validation function validate() returns true.
    if(valid){
 
      closeModal();
      //reset the form input fields if the form is validated
      form.reset();
      console.log("The form has been validated!");
      return true;
    }
  //If valid does not = true, then valid continues to = false, and the form validation function validate() returns false.
    else{
      console.log("The form has NOT passed validation.");
      return false;
    }
}

//The three parameters of the function validForm() are element, method, and event.
//The element is the DOM element that has been declared as a constant.
//The method is the function that is being used to validate the corresponding element's user input.
//The event is the focusout event, which fires when an element is about to lose focus.
function validForm(element, method, event) {
//The function executes the event listener "focusout"
    element.addEventListener(event, method);
}
//The function validForm() is called for all of the form entries.
//The function validForm() validates each user input field as the "focusout" event is triggered.
validForm(firstName, validFirstName, "focusout");
validForm(lastName, validLastName, "focusout");
validForm(email, validEmail, "focusout");
validForm(textArea, validTextArea, "focusout");