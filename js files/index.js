var signInEmail = document.querySelector("#signInEmail")
var signInpassword = document.querySelector("#signInpassword")
var signInButton = document.querySelector("#signInButton")
var checkIn = document.querySelector(".checkIn")

var usersList;

if (localStorage.getItem("users") == null) {

    usersList = []
}
else {

    usersList = JSON.parse(localStorage.getItem("users"))
}


signInButton.addEventListener("click", function () {

    var x;

    for (var i = 0; i < usersList.length; i++) {
        if (signInEmail.value == usersList[i].email && signInpassword.value == usersList[i].password) {
            localStorage.setItem("name",usersList[i].name)
            x = true
        }

    }

    if (x == true) {
       
        location.replace("html files/home.html")
        
        
    }
    else {

        checkIn.classList.replace("d-none", "d-inline")

    }


})



