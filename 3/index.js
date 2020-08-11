const button = document.querySelector('.get-data');
let data = document.querySelector('.data');
let secData = document.querySelector('.data-sec');


document.addEventListener('DOMContentLoaded', () => {
    let xhr = new XMLHttpRequest();
    let xhrSec = new XMLHttpRequest();
    xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=OCHY8Hw2TQDonfSjW3nU4nNjGsgwcaI8FhRA57MO', true);
    button.innerHTML = 'Loading';
    xhrSec.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=OCHY8Hw2TQDonfSjW3nU4nNjGsgwcaI8FhRA57MO', true);

    xhrSec.onloadend = () => {
        if (xhrSec.status === 200) {
            secData.innerHTML = `${xhrSec.response}`;
            console.log('second request done')
        }
        xhrSec.status === 200 && xhr.status === 200 ? console.log('all done') : console.error("Done with errors");
    };

    xhr.onload = () => {
        if (xhr.status === 200) {
            data.innerHTML = `${xhr.response}`;
            button.innerHTML = 'Done';
            button.disabled = false;
            console.log('first request done')
        }
    };
    xhr.send();
    xhrSec.send();
    button.disabled = true;
});
