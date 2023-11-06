window.addEventListener('resize', windowSize)
    const size =  document.getElementById("size");
    windowSize();

function windowSize () {
    size.innerHTML = "Width: " + window.innerWidth + " " + " Height: " + window.innerHeight;
}