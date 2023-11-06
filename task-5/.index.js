
function elements () {
    const btn = window.document.getElementById("button");
    const out = window.document.getElementById("out")
    
    btn.addEventListener('click', function() {
        out.innerText = "l was pressed!";
    });

    btn.addEventListener('mouseover', function(){
        out.innerText = "Mouse on me";
    });

    btn.addEventListener('mouseout', function(){
        out.innerText = "Mouse is not on me!"
    });

    
}

elements()        
