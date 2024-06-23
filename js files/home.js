

var welcome = document.querySelector("#welcome")
welcome.innerHTML=`<h1>Welcome ${localStorage.getItem("name")}</h1>`