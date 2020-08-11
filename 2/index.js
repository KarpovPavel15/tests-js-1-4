let currentUrl = window.location.href;
currentUrl = 'http://test2/filter?size=M&color=1&color=5&manufacturer=aaa&manufacturer=b&c';

const radioArr = document.querySelectorAll('.size__radio');
const checkboxArr = document.querySelectorAll('.color__checkbox');
const mulSelectArr = document.querySelectorAll('.multiply-select__option');

let radioSizeInfo = [];
let checkboxColorInfo = [];
let selectValuesInfo = [];

const getInfo = url => {
    radioSizeInfo = url.match(/size=[SML]/g);
    checkboxColorInfo = url.match(/color=\d/g);
    selectValuesInfo = url.match(/manufacturer=[\w][\w|&][\w]/g);

    radioSizeInfo = editInfo(radioSizeInfo);
    checkboxColorInfo = editInfo(checkboxColorInfo);
    selectValuesInfo = editInfo(selectValuesInfo);
};

const editInfo = info => info.map(el => el.split('=')[1]);

getInfo(currentUrl);

for (let i = 0; i < radioArr.length; i++) {
    radioArr[i].defaultValue === radioSizeInfo[0] ? radioArr[i].checked = true : null
}
for (let i = 0; i < checkboxArr.length; i++) {
    checkboxColorInfo.includes(checkboxArr[i].defaultValue) ? checkboxArr[i].checked = true : null
}
for (let i = 0; i < mulSelectArr.length; i++) {
    selectValuesInfo.includes(mulSelectArr[i].innerText) ? mulSelectArr[i].selected = true : null
}

let form = document.querySelector('#firstForm');

form.addEventListener('change', (e) => {
    getInfo(currentUrl);
    let colors = [];
    let size = [];
    let mulSelect = [];

    checkboxColorInfo.map(el => colors.push(el));
    radioSizeInfo.map(el => size.push(el));
    selectValuesInfo.map(el => mulSelect.push(el));


    switch (e.target.className) {
        case 'size__radio':
            for (let i = 0; i < radioArr.length; i++) {
                radioArr[i].checked
                    ? size.includes(radioArr[i].value)
                    ? size.push()
                    : size.push(...radioArr[i].value)
                    : null;
            }
            break;
        case 'color__checkbox':
            for (let i = 0; i < checkboxArr.length; i++) {
                checkboxArr[i].checked
                    ? colors.includes(checkboxArr[i].value)
                    ? colors.push()
                    : colors.push(...checkboxArr[i].value)
                    : null;
            }
            break;
        case 'multiply-select__label':
            for (let i = 0; i < mulSelectArr.length; i++) {
                mulSelectArr[i].selected ? mulSelect.push(mulSelectArr[i].value) : null;
                mulSelect.includes(mulSelectArr[i].value) ? mulSelectArr[i].selected = true : null;
            }
            break;
        default :
            break
    }

    const inputHandler = (inputData, string) => inputData.map((el, index) => index === inputData.length - 1 ? `${string}=${el}` : `${string}=${el}&`);
    let newUrl = `http://test/filter?${inputHandler(size, 'size')}&${inputHandler(colors, 'color')}&${inputHandler(mulSelect, 'manufacturer')}`;

    currentUrl = newUrl.replace(/,/g, '');
    alert(currentUrl)
});
