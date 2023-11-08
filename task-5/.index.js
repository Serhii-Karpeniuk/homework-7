function elements () {
    const btn = window.document.getElementById("button");
    const out = window.document.getElementById("out")
    
    btn.addEventListener('click', function() {
        out.innerHTML += "l was pressed!<br>";
    });

    btn.addEventListener('mouseover', function(){
        out.innerHTML += "Mouse on me<br>";
    });

    btn.addEventListener('mouseout', function(){
        out.innerHTML += "Mouse is not on me!<br>"
    });    
}

elements()        
