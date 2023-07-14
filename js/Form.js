// Validator
// Intitalizing form Input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Set Function to Display an error
 const showError =(field, errorText) => {
    field.classList.add("error");
    const errorElement =document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText= errorText;
    field.closest(".form-group").appendChild(errorElement);
 }

//  Function to handle form Submission
const handleFormData =(e) => {
    e.preventDefault();

    // Retrieving Input Elements
    const fullnameInput=document.getElementById("fullname");
    const emailInput=document.getElementById("email");
    const dateInput=document.getElementById("date");
    const genderInput=document.getElementById("gender");

    // Getting trimed values from input fields
    const fullname= fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password= passwordInput.value.trim();
    const date= dateInput.value;
    const gender=genderInput.value;

    // regular expression
    const emailPattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // removing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll (".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
    if (fullname =="") {
        showError(fullnameInput, "Enter your Full Name");
        alert("Enter your Full Name");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter your Email Address");
        alert("Enter your Email Address");
    }
    if (password =="") {
        showError(passwordInput, "Enter your Password");
        alert("Enter your Password");
    }
    if (date == "") {
      showError(dateInput, "Select your Birth Date"); 
      alert("Select your Birth Date");
    }
    if (gender == "") {
        showError(genderInput, "Choose your Gender please");
        alert("Choose your Gender please");
    }
    // Checking form any remaning errors before for submission
    const errorInputs= document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return; 

    //Submitting the form 
    form.submit();
    }

    // Toggle Visability
passToggleBtn.addEventListener('click', () =>{
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash": "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// Handaling
form.addEventListener("submit", handleFormData );