const loginform = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");
const text = document.querySelector("h1");

function sayhellouser(name) {
    const hour = new Date().getHours();

    if (hour < 12 && hour > 6) {
        text.innerText = `Good morning ${name}!`;

    }
    else if (hour >= 12 && hour < 18) {
        text.innerText = `Good afternoon ${name}!`;

    }
    else if (hour >= 18 && hour < 24) {
        text.innerText = `Good evening ${name}!`;

    }
    else {
        text.innerText = `Good dawn ${name}!`;

    }
    text.classList.remove("hidden");
}
function test() {
    text.innerText = "hi"
    text.classList.remove("hidden");
    console.log(text.innerText);

}
function submitevent(event) {
    event.preventDefault();
    const name = logininput.value;
    localStorage.setItem("username", name);
    loginform.classList.add("hidden");
    // text.innerText = `hello ${name}`;
    // text.classList.remove("hidden");
    sayhellouser(name);
    text.classList.remove("hidden");
    // test();
    // const hour = new Date().getHours();
    // if (hour < 12 && hour > 6) {
    //     text.innerText = `Good morning ${name}!`;
    //     text.classList.remove("hidden");
    // }
    // else if (hour >= 12 && hour < 18) {
    //     text.innerText = `Good afternoon ${name}!`;
    //     text.classList.remove("hidden");
    // }
    // else if (hour >= 18 && hour < 24) {
    //     text.innerText = `Good evening ${name}!`;
    //     text.classList.remove("hidden");
    // }
    // else {
    //     text.innerText = `Good dawn ${name}!`;
    //     text.classList.remove("hidden");
    // }
}
const savedname = localStorage.getItem("username");
if (savedname === null) {
    loginform.classList.toggle("hidden");
    loginform.addEventListener("submit", submitevent);
}
else {
    // const hour = new Date().getHours();
    // if (hour < 12 && hour > 6) {
    //     text.innerText = `Good morning ${savedname}!`;
    //     text.classList.remove("hidden");
    // }
    // else if (hour >= 12 && hour < 18) {
    //     text.innerText = `Good afternoon ${savedname}!`;
    //     text.classList.remove("hidden");
    // }
    // else if (hour >= 18 && hour < 24) {
    //     text.innerText = `Good evening ${savedname}!`;
    //     text.classList.remove("hidden");
    // }
    // else {
    //     text.innerText = `Good dawn ${savedname}!`;
    //     text.classList.remove("hidden");
    // }
    sayhellouser(savedname);
}
