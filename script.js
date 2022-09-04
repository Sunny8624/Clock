var handler = setInterval(() => {
    let d = document;
    let el = d.querySelector("#clock");
    let date = new Date();
    let toString = date.toLocaleTimeString();
    el.textContent = toString;
}, 1000);