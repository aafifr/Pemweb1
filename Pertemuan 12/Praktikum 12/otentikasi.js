const username = "Afif"
const password = "Login12345"

function login(){
    // tangkap nilai yang di input user
    let userInput = document.getElementById("username").value;
    let passInput = document.getElementById("password").value;

    let form = document.getElementById("form")

    if (username == userInput && password == passInput){
        alert("login Success");
        form.submit()
    }
    else {
        alert("Login Failed!");
    }
}