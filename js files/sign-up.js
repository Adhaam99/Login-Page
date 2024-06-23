
var signUpName = document.querySelector("#signUpName")
var signUpEmail = document.querySelector("#signUpEmail")
var signUpPassword = document.querySelector("#signUpPassword")
var signUpButton = document.querySelector("#signUpButton")
var checkUp = document.querySelector(".checkUp")

var usersList;



if (localStorage.getItem("users") == null) {

    usersList = []
}
else {

    usersList = JSON.parse(localStorage.getItem("users"))
}

console.log(usersList);

signUpButton.addEventListener("click", function () {

    if (signUpName.classList.contains("is-valid") && signUpEmail.classList.contains("is-valid") && signUpPassword.classList.contains("is-valid")) {

        var user = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value
        }

        usersList.push(user)

        localStorage.setItem("users", JSON.stringify(usersList))
        
        location.replace("../index.html")
        
    }
    else {

        checkUp.classList.replace("d-none", "d-inline")
    }




})

signUpEmail.addEventListener("blur", function () {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].email.toLowerCase() == signUpEmail.value.toLowerCase()) {

            signUpEmail.nextElementSibling.classList.replace("d-none", "d-inline")
            signUpEmail.classList.replace("is-valid", "is-invalid")

        }
        else {
            signUpEmail.nextElementSibling.classList.replace("d-inline", "d-none")

        }
    }
})

signUpName.addEventListener("input", function () {

    var regex = /^[a-zA-z]{3,20}$/gm

    validation(signUpName, signUpName.value, regex)
})

signUpEmail.addEventListener("input", function () {

    var regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm

    validation(signUpEmail, signUpEmail.value, regex)
})

signUpPassword.addEventListener("input", function () {

    var regex = /^[a-zA-z0-9\W]{8,20}$/g

    validation(signUpPassword, signUpPassword.value, regex)
})

function validation(name, val, reg) {

    if (reg.test(val)) {
        name.classList.add("is-valid");
        name.classList.remove("is-invalid");
    }
    else {
        name.classList.add("is-invalid");
        name.classList.remove("is-valid");
    }
}

