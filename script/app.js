let email = {},
    password = {},
    signInButton;

const getDOMlements = function() {
    email.input = document.querySelector(".js-email-input");
    email.errorMessage = document.querySelector(".js-email-message");
    email.field = document.querySelector(".js-email-field");

    password.input = document.querySelector(".js-password-input");
    password.errorMessage = document.querySelector(".js-password-message");
    password.field = document.querySelector(".js-password-field");

    signInButton = document.querySelector(".js-sign-in-button");
    enableListeners();
};

const doubleCheckEmail = function()  {
    if (!isEmpty(email.input.value) && !isValid(email)) {
        addErrors(email, "Invalid email");
    } else {
        removeErrors(email);
    }
};
const doubleCheckPassword = function()  {
    if (!isEmpty(password.input.value) && !isValid(password)) {
        addErrors(password, "Invalid password");
    } else {
        removeErrors(password);
    }
};

const enableListeners = function() {
    email.input.addEventListener("blur", () => {
        if (!isValid(email)) {
            email.input.addEventListener("input", doubleCheckEmail);
            isEmpty(email.input.value) == false ?
                addErrors(email, "Invalid email") :
                addErrors(email, "This field is required");
        } else {
            email.input.removeEventListener("input", doubleCheckEmail);
        }
    });
    password.input.addEventListener("blur", () => {
        if (!isValid(password)) {
            password.input.addEventListener("input", doubleCheckPassword);
            isEmpty(password.input.value) == false ?
                addErrors(password, "Invalid password") :
                addErrors(password, "This field is required");
        } else {
            password.input.removeEventListener("input", doubleCheckPassword);
        }
    });
    signInButton.addEventListener("click", (event) => {
        event.preventDefault();
        if ((isValid(email) && !isEmpty(email.input.value)) && (isValid(password) && !isEmpty(password.input.value))) {
            console.log(email.input.value);
            console.log(password.input.value);
        }
    });
};

const addErrors = function(obj, message) {
    obj.message.innerHTML = message;
    obj.field.classList.add("has-error");
};
const removeErrors = function(obj) {
    obj.message.innerHTML = "";
    obj.field.classList.remove("has-error");
};

const isValid = function(obj) {
    if (obj === email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj.input.value);
    } else if (obj === password) {
        return obj.input.value.length > 1;
    } else {
        return false;
    }
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
};

const handleFloatingLabel = () => {
    

};

function handlePasswordSwitcher() {
    
  let checkbox = document.querySelector(`.c-toggle-password__checkbox`);
  let passwordInput = document.querySelector(`.c-toggle-password__input`);
  checkbox.addEventListener(`change`, function(){

      if(checkbox.checked){
          passwordInput.type = "password";
          
          console.log("checked")
      }
      else{
          passwordInput.type = "text";
          console.log("unchecked")
      }
  })

}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');
  //handleFloatingLabel();
  handlePasswordSwitcher();
});
