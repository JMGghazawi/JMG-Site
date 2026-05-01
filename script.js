function login() {
    let pass = document.getElementById("password").value;

    if (pass === "1234") { 
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerHTML = "Wrong password!";
    }
}
