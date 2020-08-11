const receiveMessage = event => {
    let data = event.data;

    if (data.method === "set") {
        localStorage.setItem(data.key, data.value);
    }
    else if (event.data.method === "get") {
        let value = localStorage.getItem(data.key);
        event.source.postMessage({
            "value": value
            ,
        }, "*")
    }
    else if (event.data.method === "delete") {
        localStorage.removeItem(data.key)
    }
};

window.addEventListener("message", receiveMessage, false);
