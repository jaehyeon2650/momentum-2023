const loginform = document.querySelector("#login-form");
const loginbutton = document.querySelector("#login-form button");
const logininput = document.querySelector("#login-form input");
const text = document.querySelector("h1");

function submitevent(event) {
    event.preventDefault();
    const name = logininput.value;
    localStorage.setItem("username", name);
    loginform.classList.add("hidden");
    text.innerText = `hello ${name}`;
    text.classList.remove("hidden");
}

const savedname = localStorage.getItem("username");
if (savedname === null) {
    loginform.classList.toggle("hidden");
    loginform.addEventListener("submit", submitevent);
}
else {
    text.innerText = `hello ${savedname}`;
    text.classList.remove("hidden");
}