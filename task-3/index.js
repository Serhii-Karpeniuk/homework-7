
function firstButton() {
    document.body.style.backgroundColor = "#0000ff";
}
window.document.getElementById('click').onclick = firstButton;

function secondButton() {
    document.body.style.backgroundColor = "#ff00ff"
}
window.document.getElementById('double_click').ondblclick = secondButton;

function pressButton() {
    document.body.style.backgroundColor = "#ffff00"
}

function unPressButton() {
    document.body.style.backgroundColor = "#fff"
}

window.document.getElementById("colorButton").onmousedown = pressButton;
window.document.getElementById("colorButton").onmouseup = unPressButton;

function changeColorOn() {
    document.body.style.backgroundColor = "#A52A2A";
};

function changeColorOff() {
    document.body.style.backgroundColor = "#fff";
};
  window.document.getElementById("hover_link").onmouseover = changeColorOn;
  window.document.getElementById("hover_link").onmouseout = changeColorOff;
