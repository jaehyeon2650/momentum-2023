const clock = document.querySelector("#clock");

function sayhello() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${minute}:${second}`;
}
sayhello();
setInterval(sayhello, 1000);

