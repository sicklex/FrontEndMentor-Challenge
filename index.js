function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const form = document.getElementById("form")
const emailEl = document.getElementById("email-el")
const submitButton = document.getElementById("submit-button")
const errorText = document.getElementById("error-text")



submitButton.addEventListener("click", function (e){
    e.preventDefault()
    let email = emailEl.value
    if (email === "") {
        errorText.textContent = "This cannot be blank"
    }
    else if (!validateEmail(email)) {
        emailEl.className = "email"
        errorText.textContent = "Please provide a valid email"
    }else{
        errorText.textContent = ""
    }
})


emailEl.addEventListener("click", function(){
    errorText.textContent = ""
    emailEl.className = ""
})









