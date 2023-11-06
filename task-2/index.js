// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".

function changeCSS() {
    const buttonClick = window.document.getElementById('text');
    buttonClick.style.cssText = `color: #ffa500;
        font-size: 20px;
        font-family: Comic Sans MS `;
}