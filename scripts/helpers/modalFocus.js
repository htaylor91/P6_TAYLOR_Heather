//Import all three modal dialogs
import { modalDialog } from "./displayContactForm.js ";
import { descriptionDialog } from "../components/description.js";
import { lightboxDialog } from "../components/lightbox.js";

//Declaration of all modal elements that receive focus
const focusableFormElements = "button, input, textarea, [tabindex]:not([tabindex=\"-1\"])";
const focusableLightboxElements = "button, video, [tabindex]:not([tabindex=\"-1\"])";
const focusableDescriptionElements = "button, [tabindex]:not([tabindex=\"-1\"])";

//Selection of the first focusable element in each modal
const firstFocusableFormElement = modalDialog.querySelectorAll(focusableFormElements)[0];
const firstFocusableLightboxElement = lightboxDialog.querySelectorAll(focusableLightboxElements)[0];
const firstFocusableDescriptionElement = descriptionDialog.querySelectorAll(focusableDescriptionElements)[0];

//Selection of all elements that receive focus in each modal
const focusableFormContent = modalDialog.querySelectorAll(focusableFormElements);
const focusableLightboxContent = lightboxDialog.querySelectorAll(focusableLightboxElements);
const focusableDescriptionContent = descriptionDialog.querySelectorAll(focusableDescriptionElements);

//Selection of the last focusable element in each modal
const lastFocusableFormElement = focusableFormContent[focusableFormContent.length - 1];
const lastFocusableLightboxElement = focusableLightboxContent[focusableLightboxContent.length - 1]; 
const lastFocusableDescriptionElement = focusableDescriptionContent[focusableDescriptionContent.length - 1];

//Add an event listener to the document for shift and tab keys
//If the user has reached the last focusable element,
//then return focus to the first focusable element
document.addEventListener("keydown", function(e) {
    let isTabPressed = e.key === "Tab";

    if (!isTabPressed) {
        return;
    }

    if (e.shiftKey) { //if shift key is pressed
        if (document.activeElement === firstFocusableFormElement) {
            lastFocusableFormElement.focus();
            e.preventDefault();
        }
        if (document.activeElement === firstFocusableLightboxElement) {
            lastFocusableLightboxElement.focus();
            e.preventDefault();
        }
        if (document.activeElement === firstFocusableDescriptionElement) {
            lastFocusableDescriptionElement.focus();
            e.preventDefault();
        }
    } else { // if tab key is pressed
        if (document.activeElement === lastFocusableFormElement) { 
            firstFocusableFormElement.focus();
            e.preventDefault();
        }
        if (document.activeElement === lastFocusableLightboxElement) {
            firstFocusableLightboxElement.focus();
            e.preventDefault();
        }
        if (document.activeElement === lastFocusableDescriptionElement) {
            firstFocusableDescriptionElement.focus();
            e.preventDefault();
        }
    }
});

//Move focus to the first focusable element in each modal
firstFocusableFormElement.focus();
firstFocusableLightboxElement.focus();
firstFocusableDescriptionElement.focus();