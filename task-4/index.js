function chooseAndDelete() {
    const select = window.document.getElementById('select');
    const selectValue = select.value;

    for (let i = 0; i < select.options.length; i++) {
        if(select.options[i].value === selectValue) {
            select.options[i].remove();
            break;
        }
    }
}

window.document.getElementById('delete').onclick = chooseAndDelete;


