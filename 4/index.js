let iframe = window.open("./domain-two/index.html");
let key = "";
let value = "";

document.getElementById("setForm").addEventListener("submit", function (e) {
    e.preventDefault();
    key = document.querySelector('#setForm [name="key"]').value;
    value = document.querySelector('#setForm [name="value"]').value;

    iframe.postMessage({
        "method": "set",
        "key": key,
        "value": value
    }, "*");

    console.log("written" +" "+ key+ ":" + value )
}, false);

document.getElementById("getForm").addEventListener("submit", function (e) {
    e.preventDefault();

    iframe.postMessage({
        "method": "get",
        "key": document.querySelector('#getForm [name="key"]').value,
    }, "*")
}, false);

document.getElementById("deleteForm").addEventListener("submit", function (e) {
    e.preventDefault();
    key = document.querySelector('#deleteForm [name="key"]').value;

    iframe.postMessage({
        "method": "delete",
        "key": key,
    }, "*");
    console.log("removed" +" "+ key)
}, false);

const receiveMessage = event => document.getElementById("text").innerText = JSON.stringify(event.data.value);

window.addEventListener("message", receiveMessage, false);

